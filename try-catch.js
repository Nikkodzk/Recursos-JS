// estructura basica de try-catch
try{
  console.log('Bloque try evalúa una porcion de código')
  sinDeclarar = 1;  // se asigna 1 a una variable sin declrar => esto da un error
}
catch(error){
  console.log('Bloque catch: muestra el error si falla el try');
  console.log(error)
}
finally{
  console.log('Bloque finally siempre se ejecuta haya o no error')
}



// Mensaje de error peronalizado

try {
  console.log('Ingrese un numero entre 1 y 10:')
  let numero = 10;
  if (numero <= 10) console.log(numero*numero)
  else throw new Error('El numero ingresado es mayor al permitido.') // se declara un nuevo error con un texto personalizado
}
catch (error) {
  console.log('Se ha producido un error: ' ,error)
}
finally {
  console.log('Bloque finally siempre se ejecuta haya o no error')
}
