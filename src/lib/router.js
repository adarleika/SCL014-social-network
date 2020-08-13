import { inicio } from './view/templateLogin.js';
import { Login } from './index.js';
import { registrarse } from './view/templateRegistrarse.js';
import {Paginaprincipal} from './view/templatePosts.js'


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
  
     switch (hash) {
         case '#/':
         // containerRoot.appendChild(Login());
             inicio();
             break;
         case '#/Iniciar-Sesion':
         //containerRoot.appendChild(Login());
             Login();
             break;
         case '#/Registrarse':
             //containerRegistrarse.innerHTML = registrarse();
             registrarse();
             break;
         case '#/Registrar':
             //containerPost.innerHTML = Paginaprincipal();
             Paginaprincipal();
                 break;
         default: 
             inicio();
     }
         
 }
 
 
 