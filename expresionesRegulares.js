// regular expressions

const str = 'Hola mundo, hola ciudad, hola city, cola, mola, 2ola, 1ola, hoooooola';
const regex = /hola/;
console.log(str.match(regex)) // true


/texto/   expresionRegular 
g         todas las coincidencias
i         ignoreCase 
.         comodin
[a]       comodin limitado
[abc]     grupo de comodines limitados
[a-z]     grupo de comodines limitados con intermedios
[a-z0-9]  grupo de comodines limitados con intermedios y combinado con otro grupo de comodines
/a+/ => 1 o mas veces
/a*/ => 0 o mas veces
/^a/ => al inicio
/$a/ => al final
/\w/ => [A-Za-z0-9_]
/\W/ => [^A-Za-z0-9_]
/\d/ => [0-9]
/\D/ => [^0-9]
/\s/ => espacios en blanco, tabulaciones, saltos de linea, etc
/\S/ => no espacios en blanco, tabulaciones, saltos de linea, etc
/a{3,5}h/ => a entre 3 y 5 veces. 2 no, 6 tampoco
/a{3, }h/ => a entre 3 y infinito
/a{3}h/ => a solo 3 veces
/colou?r/ => la u es opcional
/P(engu|umpk)in/ => .test() retora true para Penguin o Punpkin
