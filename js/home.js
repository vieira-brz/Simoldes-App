$(document).ready(function(e)
{
    $('.box.graficos').click(function(e){
        simoldes.aviso('Esta tela participa da versão paga da aplicação!');
    });
    
    $('.box.desktop_mobile').click(function(e){
        simoldes.info('Informação', 'As telas dessa aplicação são compatíveis tanto com Desktop quanto com Android e IoS!');
    });
    
    $('.box.suporte').click(function(e){
        simoldes.aviso('Mande um e-mail para suporte_simoldes@gmail.com e aguarde dentro de um prazo de até 24h para ser atendido!');
    });
});