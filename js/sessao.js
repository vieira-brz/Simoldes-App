$(document).ready(function(e) {

    $.post('../controllers/funcionario.php', { control: 'get_session' }, function(response)
    {
        if (response == '' || response == 'null')
        {
            window.location.href = '../index.html';
        }
        else 
        {
            let json = JSON.parse(response);
    
            $('.profile .infos .nome').html(json.nome);
            $('.profile .infos .cargo').html(`${ json.cargo } | ${ json.acesso }`);
        }
    });


    // Sair
    //  
    $('[name="sair"]').click(function(e) {

        $.post('../controllers/funcionario.php', { control: 'get_out_session' }, function(response)
        {
            window.location.href = '../index.html';
        });
    });
});