import { inicio } from './view/templateLogin.js';
import { Login } from './index.js';
import { registrarse } from './view/templateRegistrarse.js';
import {Paginaprincipal} from './view/templatePosts.js'
<<<<<<< HEAD


//import { Paginaprincipal} from './view/templatePosts.js'



export const changeRoute = (hash) => {

    //return showTemplate(hash)
    /*
     if (hash === '#/') {
        return showTemplate(hash)
     } else if (hash === '#/IniciarSesion') {
         return showTemplate(hash)
 
     } else if (hash === '#/Registrarse') {
         return showTemplate(hash)
         
     } else if (hash === '#/Posts') {
        return showTemplate(hash)   
     
     } else {
         return showTemplate(hash)
     }
 
 */
   

 //const containerRoot = document.getElementById('root');
 const showTemplate = (hash) => {
=======


export const changeRoute = (hash) => {
    // if (hash === '#/Iniciar-Sesion') {
         return showTemplate(hash)
 
    /* } else if (hash === '#/Registrarse') {
         return showTemplate(hash)
     } else {
         return showTemplate(hash)
     }*/
 };
 
 const showTemplate = (hash) => {
  
>>>>>>> bbf7692... update cambios ada
     switch (hash) {
         case '#/':
         // containerRoot.appendChild(Login());
             inicio();
             break;
<<<<<<< HEAD
         case '#/IniciarSesion':
         //containerRoot.innerHTML = Login();
            Login();
=======
         case '#/Iniciar-Sesion':
         //containerRoot.appendChild(Login());
             Login();
>>>>>>> bbf7692... update cambios ada
             break;
         case '#/Registrarse':
             //containerRegistrarse.innerHTML = registrarse();
             registrarse();
             break;
<<<<<<< HEAD
         case '#/Posts':
=======
         case '#/Registrar':
>>>>>>> bbf7692... update cambios ada
             //containerPost.innerHTML = Paginaprincipal();
             Paginaprincipal();
                 break;
         default: 
             inicio();
     }
         
<<<<<<< HEAD
    }
}


=======
 }
>>>>>>> bbf7692... update cambios ada
 
 
 