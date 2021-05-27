push() => +1 al final
pop() => -1 al final

shift() => -1 al inicio
unshift() => +1 al inicio

splice(0,2,'algo','algomas') => remueve desde la posicion 0, 2 elementos y agrega desde la posicion 0 los elementos 'algo ' y 'algo mas'


------------- forEach() -------------

arr.forEach((e, index) => {
  console.log(e,index);
})

------------- map() -------------

  - Mantiene el array original sin modificar
  - Devuelve un nuevo array de la MISMA longitud que el array inicial
  - Sirve para "filtrar" caracteristicas del array original
  
let numeros = [1,2,3,4,5,6,7,8,9,0];
let numerosPorDos = numeros.map(x => x*2 );
console.log(numerosPorDos)  // [2,4,6,8,10,12,14,16,18,0]

let animales = [
  { tipo: 'perro', nombre: 'Lupita', color: 'negro' },
  { tipo: 'perro', nombre: 'Robotina', color: 'byn' },
  { tipo: 'gato', nombre: 'Garfield', color: 'naranja' },
]

let animales2 = animales.map(animal => ({name: animal.nombre, type: animal.tipo}) ); // me quedo solo con nombre y tipo de todos los animales
console.log(animales2); // [
  { tipo: 'perro', nombre: 'Lupita' },
  { tipo: 'perro', nombre: 'Robotina' },
  { tipo: 'gato', nombre: 'Garfield' },
]

