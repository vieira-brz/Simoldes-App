window.onload = function() {

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
}