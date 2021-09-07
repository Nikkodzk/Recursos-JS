// ------------------------------------------ HTML
//<div>
//    <ul id="datos"></ul>
//</div>


// ------------------------------------------ JS

// defino en una constante la url a consultar
const URLAPI = 'https://jsonplaceholder.typicode.com/users';

// Almaceno en una constante el elemento HTML donde pegar los datos 
const target = document.querySelector('#datos');


fetch(URLAPI)                               // Llamo a la url => Devuelve un array en forma de promesa
  .then((responde) => responde.json())      // Convierto el array-json-txt (plano) en un array de objetos para poder manipularlos. Devuelve una promesa
    .then((usuarios) => {                     // Con el array convertido itero cada elemento
      const contenido = usuarios.map(user => '<li>' + user.name + '</li>');   // Por cada elemento, devuelvo un <li> con el nombre
      target.innerHTML += contenido;          // agrego el contenido al elemento HTML para poder verlo.
    }
  )
