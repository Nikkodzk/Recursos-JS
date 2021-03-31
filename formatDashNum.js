// HTML
// <input type="text" maxlength="12" id="pn" onkeyup="format()" class="w-25" placeholder="Ingrese PN">

function format(){
  // formato salida = 000-000-0000
  let part = document.getElementById('pn').value;
  let input = part.split('');

  // ingreso 1x1 digito
  if(input.length === 4 || input.length === 8){
    if(input[input.length-1] > -1 ){  
      let primeros = input.slice(0,input.length-1); 
      let  formateado = primeros.join('')+'-'+ input.pop();
      document.getElementById('pn').value = formateado;
    }
  }
  // paste 10 digit number
  if(input.length===10 && !input.includes('-')){
    let formateado = input.slice(0,3)+'-'+input.slice(3,6)+'-'+input.slice(6,10);
    document.getElementById('pn').value = formateado.replace(/,/g,''); 
  }
}
