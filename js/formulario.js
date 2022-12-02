$(document).ready((e) => {

    const controller = '../controllers/formulario.php';
    const controller2 = '../controllers/funcionario.php';
    
    $('[name="enviar"]').click(function(e)
    {
        e.preventDefault();
        
        $.post(controller2, {
            control: 'get_session'
        }, 
        function(response)
        {
            if (response == '' || response == 'null')
            {
                simoldes.erro('Erro ao carregar informações de acesso!');
            }
            else 
            {
                let funcionario = JSON.parse(response);

                let vale_transporte = $('[name="transporte"]').val();
                let plano_odontologico = $('[name="odonto"]').val();
                let plano_saude = $('[name="saude"]').val();
                let comentario = $('[name="obs"]').val();

                if (vale_transporte != '' && plano_odontologico != '' && plano_saude != '')
                {
                    $.post(controller,
                    {
                        control: 'cadastrar',
                        vale_transporte: vale_transporte,
                        plano_odontologico: plano_odontologico,
                        plano_saude: plano_saude,
                        comentario: comentario,
                        matricula: funcionario.matricula,
                    },
                    function(response2) 
                    {
                        if (response2 == 'NOK')
                        {
                            simoldes.erro('Erro ao cadastrar!');
                        }
                        else if (response2 == 'PENDENTE')
                        {
                            simoldes.aviso('Um formulário já está aguardando avaliação!');
                        }
                        else 
                        {
                            window.location.href = 'validar-formulario.html';
                        }
                    });
                }
                else 
                {
                    simoldes.aviso('Preencha todos os campos!');
                }
            }
        });

        window.location.href = 'validar-formulario.html';
    });
});