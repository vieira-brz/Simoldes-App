function timeout_complete(timeout = 5000) {
  clearTimeout();
  setTimeout(function() { simoldes.complete(); }, timeout);
  $(document).keydown(function(e){ simoldes.complete(); });
}


console.log('Listagem de objetos: CPTAlert.js -------------------------------------------------------------------------------------------');
console.log('Alertas: ', ['tipo (string)', 'texto (string)', 'titulo (string)', 'time (integer = segundos)', 'danger (boolean)', 'buttons (boolean)', 'closeAround (boolean)']);

const simoldes = function(texto) { swal(texto, { closeOnClickOutside: false, }); timeout_complete(1700); }


simoldes.awt = function(texto) { swal(texto, { buttons: false, closeOnClickOutside: false, icon: 'info', }); }


simoldes.sucesso = function(texto, obj) {

  if (typeof(texto) == 'object') { console.error('O primeiro parâmetro espera por uma string, objeto encontrado.'); }

  typeof(texto) != 'string' ? texto = 'Sucesso ao executar a ação!' : texto = texto

  if (obj != undefined)
  {
    obj.time == undefined ? timer = null : timer = obj.time * 1000
    obj.timeout == undefined ? timeout = 3000 : timeout = obj.timeout
    obj.danger == undefined ? dangerMode = false : dangerMode = obj.danger
    obj.buttons == undefined ? activeButtons = true : activeButtons = obj.buttons
    obj.closeAround == undefined ? closeSwal = false : closeSwal = obj.closeAround

    if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
    if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
    if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

    swal('Sucesso!', texto, {
      icon: 'success',
      buttons: activeButtons,
      closeOnClickOutside: closeSwal,
      dangerMode: dangerMode,
      timer: timer,
    });

    timeout_complete(timeout);
  }
  else
  {
    swal('Sucesso!', texto, {
      icon: 'success',
      buttons: true,
      closeOnClickOutside: false,
      dangerMode: false,
      timer: null,
    });

    timeout_complete();
  }
}


simoldes.erro = function(texto, obj) {

  if (typeof(texto) == 'object') { console.error('O primeiro parâmetro espera por uma string, objeto encontrado.'); }

  if (obj != undefined)
  {
    obj.time == undefined ? timer = null : timer = obj.time * 1000
    obj.timeout == undefined ? timeout = 10000 : timeout = obj.timeout
    obj.danger == undefined ? dangerMode = false : timer = obj.danger
    obj.buttons == undefined ? activeButtons = true : timer = obj.buttons
    obj.closeAround == undefined ? closeSwal = false : timer = obj.closeAround

    if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
    if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
    if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

    swal('Erro!', texto, {
      icon: 'error',
      buttons: activeButtons,
      closeOnClickOutside: closeSwal,
      dangerMode: dangerMode,
      timer: timer,
    });

    timeout_complete(timeout);
  }
  else
  {
    swal('Erro!', texto, {
      icon: 'error',
      buttons: true,
      closeOnClickOutside: false,
      dangerMode: false,
      timer: null,
    });

    timeout_complete();
  }

}


simoldes.aviso = function(texto, obj) {

  if (typeof(texto) == 'object') { console.error('O primeiro parâmetro espera por uma string, objeto encontrado.'); }

  typeof(texto) != 'string' ? swal('Erro!', 'Insira um texto de entrada!', {icon:'error'}) : texto = texto

  if (obj != undefined)
  {
    obj.time == undefined ? timer = null : timer = obj.time * 1000
    obj.danger == undefined ? dangerMode = false : dangerMode = obj.danger
    obj.buttons == undefined ? activeButtons = true : activeButtons = obj.buttons
    obj.closeAround == undefined ? closeSwal = false : closeSwal = obj.closeAround

    if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
    if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
    if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

    swal('Aviso!', texto, {
      icon: 'warning',
      buttons: activeButtons,
      closeOnClickOutside: closeSwal,
      dangerMode: dangerMode,
      timer: timer,
    });
  }
  else
  {
    swal('Aviso!', texto, {
      icon: 'warning',
      buttons: true,
      closeOnClickOutside: false,
      dangerMode: false,
      timer: null,
    });
  }

  timeout_complete();
}


simoldes.info = function(titulo, texto, obj) {

  if (typeof(texto) == 'object') { console.error('O segundo parâmetro espera por uma string, objeto encontrado.'); }
  if (typeof(titulo) == 'object') { console.error('O primeiro parâmetro espera por uma string, objeto encontrado.'); }

  typeof(texto) != 'string' ? swal('Erro!', 'Insira um texto de entrada!', {icon:'error'}) : texto = texto
  typeof(titulo) != 'string' ? swal('Erro!', 'Insira um título de entrada!', {icon:'error'}) : titulo = titulo

  if (obj != undefined)
  {
    obj.time == undefined ? timer = null : timer = obj.time * 1000
    obj.danger == undefined ? dangerMode = false : dangerMode = obj.danger
    obj.buttons == undefined ? activeButtons = true : activeButtons = obj.buttons
    obj.closeAround == undefined ? closeSwal = false : closeSwal = obj.closeAround

    if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
    if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
    if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

    swal(titulo, texto, {
      icon: 'info',
      buttons: activeButtons,
      closeOnClickOutside: closeSwal,
      dangerMode: dangerMode,
      timer: timer,
    });
  }
  else
  {
    swal(titulo, texto, {
      icon: 'info',
      buttons: true,
      closeOnClickOutside: false,
      dangerMode: false,
      timer: null,
    });
  }

  timeout_complete();
}


simoldes.request = function() {

  swal('Informação!', 'Aguarde um instante enquanto o sistema processa sua requisição!', {
    icon: 'info',
    buttons: false,
    closeOnClickOutside: false,
    dangerMode: false,
    timer: null,
  });
}


simoldes.db = function(obj) {

  if (obj != undefined)
  {
    obj.time == undefined ? timer = null : timer = obj.time * 1000
    obj.danger == undefined ? dangerMode = false : dangerMode = obj.danger
    obj.buttons == undefined ? activeButtons = true : activeButtons = obj.buttons
    obj.closeAround == undefined ? closeSwal = false : closeSwal = obj.closeAround

    if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
    if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
    if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

    swal('Erro!', 'Erro na conexão com o servidor!', {
      icon: 'error',
      buttons: activeButtons,
      closeOnClickOutside: closeSwal,
      dangerMode: dangerMode,
      timer: timer,
    });
  }
  else
  {
    swal('Erro!', 'Erro na conexão com o servidor!', {
      icon: 'error',
      buttons: true,
      closeOnClickOutside: false,
      dangerMode: true,
      timer: null,
    });
  }

  timeout_complete(1700);
}


simoldes.complete = function() { swal.close(); }


simoldes.html = function(tipo, titulo, texto, obj) {

  if (obj == undefined)
  {
    console.error('Erro: simoldes.html espera por 4 parâmetros (tipo (string), titulo (string), texto (string), objeto (object)).',
    ['Object keys: ', ['tipo (string)', 'texto (string)', 'titulo (string)', 'time (integer second)', 'danger (boolean)',
    'buttons (boolean)', 'closeAround (boolean)']]);
  }
  else
  {
    obj.html == undefined ? swal('Erro!', 'A função simoldes.html necessita de um HTML em formato string!', {icon:'error'}) : html = obj.html
    if (typeof(html) != 'string' && html != '') { console.error('Erro: Insira um tipo de entrada!') }

    tipo == undefined ? type = swal('Erro!', 'Insira um tipo de entrada!', {icon:'error'}) : type = tipo
    texto == undefined ? texto = swal('Erro!', 'Insira um texto de entrada!', {icon:'error'}) : texto = texto
    titulo == undefined ? titulo = swal('Erro!', 'Insira um titulo de entrada!', {icon:'error'}) : titulo = titulo

    if (typeof(type) != 'string' && type != '') { console.error('Erro: O tipo necessita ser string!') }
    if (typeof(texto) != 'string' && texto != '') { console.error('Erro: O texto necessita ser string!') }
    if (typeof(titulo) != 'string' && titulo != '') { console.error('Erro: O titulo necessita ser string!') }

    obj.time == undefined ? timer = null : timer = obj.time * 1000
    obj.danger == undefined ? dangerMode = false : dangerMode = obj.danger
    obj.buttons == undefined ? activeButtons = true : activeButtons = obj.buttons
    obj.closeAround == undefined ? closeSwal = false : closeSwal = obj.closeAround

    if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
    if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
    if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

    let span = document.createElement('span');
    span.innerHTML = html;

    switch (type)
    {
      case 'info':
        type = 'info'
      break;

      case 'erro':
        type = 'error'
      break;

      case 'aviso':
        type = 'warning'
      break;

      case 'sucesso':
        type = 'success'
      break;

      default: console.error('Defina um tipo na língua portuguesa!')
    }

    swal(titulo, texto, {
      icon: type,
      content: span,
      buttons: activeButtons,
      closeOnClickOutside: closeSwal,
      dangerMode: dangerMode,
      timer: timer,
    });
  }
}
