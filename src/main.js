
// Este es el punto de entrada de tu aplicacion

//import {myFunction} from './lib/index.js';
import {inicio} from './lib/view/templateLogin.js';
//lo comento proque solo lo queria ver en pag
import {Login} from './lib/index.js';
import { sigupForm } from './lib/firebase.js';
//import{registrarse} from './lib/view/templateRegistrarse.js'; 
import {changeRoute} from './lib/router.js';
// porque la use abajo myFunction();
//aqui voy a pintar el html de botones en la pagina
//document.getElementById('root').innerHTML=inicio();
//lo comento proque solo lo queria ver en pag
//document.getElementById('root').appendChild (Login());
//document.getElementById('root').appendChild (registrarse()); esta ya no createEñement asi que no es appenchild

/*const init = () => {
    document.getElementById ('root').innerHTML=inicio()
    window.addEventListener('hashchange', () => {
    inicio();
<<<<<<< HEAD
<<<<<<< HEAD
    //Login(); OOOOJOOOOO CON ESTO 
=======
    //Login(); //OOOOJOOOOO CON ESTO 
>>>>>>> bbf7692... update cambios ada
=======
    //Login(); OOOOJOOOOO CON ESTO 
>>>>>>> 3b61e34... update
     console.log(window.location.hash);
     changeRoute(window.location.hash)
        })
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3b61e34... update
window.addEventListener('load', init)*/

const init = () => {
    inicio();
      // changeRoute(window.location.hash);
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash);
       changeRoute(window.location.hash);
    })
}
window.addEventListener('load', init);
<<<<<<< HEAD
=======
window.addEventListener('load', init)
*/

const init = () => {
    changeRoute(window.location.hash)
    window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
     changeRoute(window.location.hash)
    })
}
window.addEventListener('load', init)
>>>>>>> bbf7692... update cambios ada
=======
>>>>>>> 3b61e34... update
