$(document).ready((e) => {

    const controller = '../controllers/validacao.php';
    const controller_func = '../controllers/funcionario.php';

    $.post(controller, {
        controller_func: 'get_session'
    }, 
    function(response)
    {
        if (response == '' || response == 'null')
        {
            $('.table').addClass('none');
            $('.sem-dados').removeClass('none');
            simoldes.erro('Erro ao carregar informações de acesso!');
        }
        else 
        {
            let funcionario = JSON.parse(response);

            if (funcionario.acesso == 'PADRAO')
            {
                $.post(controller,
                {
                    control: 'get_func',
                    matricula: funcionario.matricula,
                },
                function(response2) 
                {
                    if (response2 == 'NOK')
                    {
                        $('.table').addClass('none');
                        $('.sem-dados').removeClass('none');
                        simoldes.info('Nenhum registro encontrado!');
                    }
                    else 
                    {
                        let parsed = JSON.parse(response2);
                        create_table(parsed);
                    }
                });
            }
            else if (funcionario.acesso == 'MASTER')
            {
                $.post(controller,
                {
                    control: 'get_all'
                },
                function(response2)
                {
                    if (response2 == 'NOK')
                    {
                        $('.table').addClass('none');
                        $('.sem-dados').removeClass('none');
                        simoldes.info('Nenhum registro encontrado!');
                    }
                    else 
                    {
                        let parsed = JSON.parse(response2);
                        create_table(parsed);
                    }
                });
            }  
            else 
            {
                $('.table').addClass('none');
                $('.sem-dados').removeClass('none');
                simoldes.erro('Erro ao carregar informações!');
            }
        }
    });


    // Monta tabela
    // 
    function create_table(array)
    {
        $('.table').removeClass('none');
        $('.sem-dados').addClass('none');

        $.each(array, function(index, key)
        {
            $('.table').find('table > tbody').html();
            $('.table').find('table > tbody').append(`
                <tr id="${ key.ID }">
                    <td>${ key.MATRICULA } - ${ key.NOME }</td>
                    <td>${ key.VALE_TRANSPORTE }</td>
                    <td>${ key.PLANO_ODONTOLOGICO }</td>
                    <td>${ key.PLANO_SAUDE }</td>
                    <td>${ key.COMENTARIO }</td>
                    <td>
                        <button class="btn btn-verde" name="accept">
                            <span class="material-icons">
                                check
                            </span>
                            Validar
                        </button>
                        <button class="btn btn-vermelho" name="decline">
                            <span class="material-icons">
                                close
                            </span>
                            Negar
                        </button>
                    </td>
                </tr>
            `);
        });


        // Accept 
        // 
        $('.table').on('click', '[name="accept"]', function(e)
        {
            e.preventDefault();

            let id = $(this).closest('tr').attr('id');

            $.post(controller, {
                controller_func: 'accept',
                id: id
            }, 
            function(response)
            {
                if (response == 'OK')
                {
                    simoldes.sucesso('Formulário validado com sucesso!');
                    setTimeout(() => {
                        location.reload();
                    }, 3000);
                }
                else 
                {
                    simoldes.erro('Erro ao validar formulário!');
                }
            });
            
            e.stopImmediatePropagation();
        });


        // Decline 
        // 
        $('.table').on('click', '[name="decline"]', function(e)
        {
            e.preventDefault();

            let id = $(this).closest('tr').attr('id');
            
            $.post(controller, {
                controller_func: 'decline',
                id: id
            }, 
            function(response)
            {
                if (response == 'OK')
                {
                    simoldes.sucesso('Formulário recusado com sucesso!');
                    setTimeout(() => {
                        location.reload();
                    }, 3000);
                }
                else 
                {
                    simoldes.erro('Erro ao recusar formulário!');
                }
            });
            
            e.stopImmediatePropagation();
        });
    }
});