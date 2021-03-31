function format(){
  // formato salida = 000-000-0000
  let part = document.getElementById('pn').value;
  let input = part.split('');

  if(input.length === 4 || input.length === 8){
    if(input[input.length-1] > -1 ){  
      let primeros = input.slice(0,input.length-1); 
      let  formateado = primeros.join('')+'-'+ input.pop();
      document.getElementById('pn').value = formateado;
    }
  }
}
