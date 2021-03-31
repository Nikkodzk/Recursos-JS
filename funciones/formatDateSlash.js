// HTML
// <input type="text" maxlength="10" id="data" onkeyup="formatDate()" class="w-50" placeholder="dd/mm/aaaa">

function formatDate(){
  // formato salida = dd/mm/aaaa
  let data = document.getElementById('data').value;
  let input = data.split('');

  // ingreso 1x1 digito
  if(input.length === 3 || input.length === 6){
    if(input[input.length-1] !== '/' ){  
      let primeros = input.slice(0,input.length-1); 
      let  formateado = primeros.join('')+'/'+ input.pop();
      document.getElementById('data').value = formateado;
    }
  }
}
