import { registrarse } from './templateRegistrarse.js';
import { signIn} from '../firebase.js';
import {inicioGoogle} from '../firebase.js'
import {Login} from '../index.js';
import{Paginaprincipal} from './templatePosts.js'

export const inicio = () => {
    const viewInicio = `
  <div class="contenedorInicio" id="inicio">
        <img src="img/logotipo1.png" class="logotipo" alt="logotipo">

        <p>La comunidad Jungiana más grande, creada para compartir intereses en común y distintas personalidades.</p>
        <input type="image" class="logoGoogle" src="img/google.png" alt="imagenGoogle"/>
        <button type="button"  class="botongoogle" id="botongoogle">Iniciar sesión con Google</button>

      <div class="contenedor-botones">
        <a class="boton btn-iniciosesion" id="btn-iniciosesion" href="#/Iniciar-Sesion">Iniciar Sesion</a>
        <a class="boton btn-registrarse" id="btn-registrarse" href="#/Registrarse">Registrarse</a>
      </div>

    <a href="https://www.16personalities.com/es/test-de-personalidad">
      <img  class="icono16" src="img/icono16.png" alt="logo 16 personalidades">
    </a>
    <p class="parrafo16"> Test 16personalities</p>
  </div>
    `;
    //return viewBotones; 

    window.location.hash = "#/";
    document.getElementById('root').innerHTML = viewInicio;
    LoadRegistrarFuncion();
    //LoginGoogle();
};

const LoadRegistrarFuncion = () => {

    // Función que lleva desde la de inicio a la de registro
    const btnIniciarSesion = document.querySelector('#btn-iniciosesion');
    btnIniciarSesion.addEventListener('click', Login);
    

    const btnRegistrarse = document.querySelector('#btn-registrarse');
    btnRegistrarse.addEventListener('click', registrarse);
     
    
    /*const btnLoginGoogle = document.querySelector('#botongoogle');
    btnLoginGoogle.addEventListener('click', () => {
    inicioGoogle(Paginaprincipal);
    });
 */
   const btnLoginGoogle = document.querySelector('#botongoogle');
   btnLoginGoogle.addEventListener('click', () => {
   inicioGoogle(Paginaprincipal);
   });
    

   
};
 
  /*
const LoginGoogle = () => {
     
  const btnLoginGoogle = document.querySelector('#botongoogle');
  btnLoginGoogle.addEventListener('click', () => {
  inicioGoogle(Paginaprincipal);
  });
 }
*/
