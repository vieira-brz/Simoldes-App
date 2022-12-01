$(document).ready((e) => {

    let controller = '../controllers/funcionario.php';

    $('button[name="alterar"]').click(function(e) {

        e.preventDefault();

        let matricula = $('input[name="matricula"]').val();
        let palavra = $('input[name="palavra"]').val();
        let senha = $('input[name="senha"]').val();

        if (matricula == '' || palavra == '' || senha == '')
        {
            simoldes.aviso('Preencha todos os campos!');
        }
        else 
        {
            $.post(controller, 
            {
                control: 'muda_senha',
                matricula: matricula,
                palavra: palavra,
                senha: senha,
            },
            function(response)
            {
                if (response == 'OK')
                {
                    simoldes.sucesso('Senha alterada com sucesso!');

                    setTimeout(function() {
                        window.location.href = '../index.html';
                    }, 5000);
                }
                else 
                {
                    simoldes.erro('Não foi possível alterar sua senha.')
                }
            });
        }
       
        e.stopImmediatePropagation();
    });
});
