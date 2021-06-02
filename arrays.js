push() => +1 al final
pop() => -1 al final

shift() => -1 al inicio
unshift() => +1 al inicio

splice(0,2,'algo','algomas') => remueve desde la posicion 0, 2 elementos y agrega desde la posicion 0 los elementos 'algo ' y 'algo mas'


------------- Eliminar 1 elemento -------------

  let someArr = [1,2,3,4,5,6];
  delete someArr[0]; // [,2,3,4,5,6]
  console.log(someArr.filter(x => x!== null)) // [2,3,4,5,6]


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


------------- filter() -------------
  
  - No modifica el array original
  - Filtra los elementos del array
  - Crea un nuevo array de igual o menor longitud
  - Crea un nuevo array con los elementos que pasen la condicion
  
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);

console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].


------------- slice() -------------
  
  - Devuelve un nuevo array
  - recibe 2 argumentos
    1. posicion desde donde inicia
    2. posicion de corte (no inclusivo) => si no se indica, va hasta el final
  
let arr = ["Cat", "Dog", "Tiger", "Zebra"];
let newArray = arr.slice(1, 3);
console.log(newArray); // ["Dog", "Tiger"].


------------- reduce() -------------
 
  - Recibe 2 argumentos
    1. acumulador => es como un index
    2. valor inicial del acumulador (en el 1er ejemplo empieza de 1 x eso da como resultado 5 a pesar que 'casa' tiene 4 letras)
 
  
let nArray = ['c','a','s','a'];
let acumuluador = nArray.reduce((acumulador)=>acumulador,1);
console.log(acumuluador) // 5


let numeros = [1,2,3,4,5];
let total = numeros.reduce((acum, elem) => acum+elem);
console.log(total); // 15
