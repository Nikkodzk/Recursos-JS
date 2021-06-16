// define an Object
let dog = {
  name: 'Firulais',
  age: 5,
  color: 'Black',
  weigth: '11 kg'
}

// Recorro las propiedades del objeto (no los valores de esas propiedades)
for( let property in dog ){
  console.log(property)
}
// name
// age
// color
// weigth

// Object.keys(<un objeto>) devuelve las propiedades en un array (no los valores)
console.log( Object.keys(dog) ) // [name, age, color, weigth]
