// regular expressions

const str = 'Hola mundo, hola ciudad, hola city, cola, mola, 2ola, 1ola, hoooooola';


//const regex = /hola/; // encontar exacto el texto
// const regex = /hola/g;  // encontar exacto el texto, pero todos
// const regex = /hola/ig;  // ignorar mayusculas y minusculas
// const regex = /.ola/g;  // punto (.) es comodin
// const regex = /[hm]ola/g;  // punto [az] es comodin limitado
// const regex = /[a-h]ola/g;  // guion [a-h] lmita caracteres de la a hasta la h = a,b,c,d,e,f,g,h
// const regex = /[a-h0-8]ola/g;  // guion [a-h0-8] lmita caracteres de la a hasta la h y del 0 al 8



console.log(str.match(regex))
