$(document).ready((e) => {

    const controller = '../controllers/validacao.php';
    const controller_func = '../controllers/funcionario.php';

    $.post(controller_func, {
        control: 'get_session'
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
                        create_table(parsed, 'PADRAO');
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
                        create_table(parsed, 'MASTER');
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
    function create_table(array, acesso)
    {
        $('.table').removeClass('none');
        $('.sem-dados').addClass('none');

        $.each(array, function(index, key)
        {
            if (acesso != 'MASTER')
            {
                if (key.COMENTARIO === '') {
                    key.COMENTARIO = 'Sem comentários...';
                }

                let status = key.STATUS_VALIDACAO;
                status = status === 'NOK' ? 'Aguardando Validação' : `Validado: ${ key.VALIDADO === 'S' ? 'Sim' : 'Não' }`;

                $('.table').find('table > tbody').html();
                $('.table').find('table > tbody').append(`
                    <tr id="${ key.ID }">
                        <td>${ key.MATRICULA } - ${ key.NOME }</td>
                        <td>${ key.VALE_TRANSPORTE }</td>
                        <td>${ key.PLANO_ODONTOLOGICO }</td>
                        <td>${ key.PLANO_SAUDE }</td>
                        <td>${ key.COMENTARIO }</td>
                        <td>${ status }</td>
                    </tr>
                `);
            }
            else 
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
            }
        });


        // Accept 
        // 
        $('.table').on('click', '[name="accept"]', function(e)
        {
            e.preventDefault();

            let id = $(this).closest('tr').attr('id');

            $.post(controller, {
                control: 'accept',
                id: id
            }, 
            function(response)
            {
                if (response == 'OK')
                {
                    location.reload();
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
                control: 'decline',
                id: id
            }, 
            function(response)
            {
                if (response == 'OK')
                {
                    location.reload();
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