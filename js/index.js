$(document).ready((e) => {

    const controller = './controllers/funcionario.php';

    let togglers = document.querySelectorAll('button[name="toggler"]');
    let togCadastro = togglers[0];
    let togEntrar = togglers[1];

    togCadastro.addEventListener('click', function(e) {
        e.preventDefault();

            document.querySelector('.cadastro').classList.add('hide')
            document.querySelector('.entrar').classList.remove('hide')

            document.querySelector('.form-entrar').classList.add('hide')
            document.querySelector('.form-cadastro').classList.remove('hide')
        
        e.stopImmediatePropagation();
    })

    togEntrar.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector('.entrar').classList.add('hide')
        document.querySelector('.cadastro').classList.remove('hide')

        document.querySelector('.form-cadastro').classList.add('hide')
        document.querySelector('.form-entrar').classList.remove('hide')

        e.stopImmediatePropagation();
    })


    let checkTerms = document.querySelector('label[for="checkbox-terms"]');
    checkTerms.addEventListener('click', function(e) {
        e.preventDefault();
        
        this.classList.toggle('checked')

        e.stopImmediatePropagation();
    })


    // Login
    // 
    $('.form-entrar').find('button[name="entrar"]').click(function(e) {
        e.preventDefault();

        let matricula = $('.form-entrar').find('input[name="matricula"]').val();
        let senha = $('.form-entrar').find('input[name="senha"]').val();

        let void_items = false;
        $('.form-entrar').find('input').each(function(el) {
            if ($(this).val() == '') {
                void_items = true;
            }
        });
        
        if (void_items) 
        {
            simoldes.aviso("Preencha todos os campos!");
        }
        else 
        {
            $.post(controller, 
            {
                control: 'logar',
                matricula: matricula,
                senha: senha
            }, 
            function(response) 
            {
                if (response == 'OK') 
                    window.location.href = './dashboard/home.html';
                else 
                    simoldes.erro('Matrícula ou senha erradas!');
            });
        }

        e.stopImmediatePropagation();
    });


    // Cadastro
    //
    $('.form-cadastro').find('button[name="cadastrar"]').click(function(e) {
        e.preventDefault();

        let cargo = $('.form-cadastro').find('input[name="cargo"]').val();
        let nome = $('.form-cadastro').find('input[name="nome"]').val();
        let matricula = $('.form-cadastro').find('input[name="matricula"]').val();
        let senha = $('.form-cadastro').find('input[name="senha"]').val();
        let palavra = $('.form-cadastro').find('input[name="palavra"]').val();

        let checked_terms = $('label[for="checkbox-terms"]').hasClass('checked');

        if (checked_terms) {

            let void_items = false;
            $('.form-cadastro').find('input').each(function(el) {
                if ($(this).val() == '') {
                    void_items = true;
                }
            });
            
            if (void_items) 
            {
                simoldes.aviso("Preencha todos os campos!");
            }
            else 
            {
                $.post(controller, 
                {
                    control: 'cadastrar',
                    cargo: cargo,
                    nome: nome,
                    matricula: matricula,
                    senha: senha,
                    palavra: palavra
                }, 
                function(response) 
                {
                    if (response == 'OK') 
                        window.location.href = './dashboard/home.html';
                    else 
                        simoldes.erro('Ocorreu um erro ao tentar se cadastrar, chame o suporte!');
                });
            }
        } 
        else 
        {
            simoldes.aviso('Você precisa aceitar os termos de privacidade para prosseguir!');
        }

        e.stopImmediatePropagation();
    });


    // Esqueceu a senha
    // Em manutenção... 
});