import { sigupForm, } from '../firebase.js';
import { Paginaprincipal } from './templatePosts.js';

export const registrarse = () => {
  const registrar = `
  <div class="contenedorInicio" id="inicio">
    <img src="img/logotipo1.png" class="logotipo" alt="logotipo">
    <p class="tituloRegi">Registrarse</p>
   
    <!-- <main>-->
        <form id="form-registrarse" class="formato_registrarse">
      <!--  <input class="input nombre" id="nombre" type="text" placeholder="Nombre">
        <input class="input apellido" id="apellido" type="text" placeholder="Apellido"> -->
       
        <input class="input email" id="email" type="text" placeholder="Correo eléctronico" required>
        <input class="input password" id="password" type="password" placeholder="Contraseña" required>

     <!--   <select id="mbti" class="input mbti">
            <option value="">MBTI</option>
            <option value="ESTJ">ESTJ </option>
            <option value="ESTP">ESTP </option>
            <option value="ESFJ">ESFJ </option>
            <option value="ESFP">ESFP </option>
            <option value="ISTJ">ISTJ </option>
            <option value="ISTP">ISTP </option>
            <option value="ISFJ">ISFJ </option>
            <option value="ISFP">ISFP </option>
            <option value="ENTJ">ENTJ </option>
            <option value="ENTP">ENTP </option>
            <option value="ENFJ">ENFJ </option>
            <option value="ENFP">ENFP </option>
            <option value="INTJ">INTJ </option>
            <option value="INTP">INTP </option>
            <option value="INFJ">INFJ </option>
            <option value="INFP">INFP </option>
        </select>
    -->
<<<<<<< HEAD
        
   <div class="contenedor-botones">
     <a class="boton btn-atras" href="#/Atras" onclick="location.href = document.referrer; return false;">Atrás</a>
     <button type="button" class="boton btn-registrarse" id="btn-registrarse">Registrarse</button>
   </div> 
   `;
=======
        <div class="btns">
        <button type="submit" class="btn-registrarse" id="btn-registrarse">Registrarse</button>
        </div>
>>>>>>> bbf7692... update cambios ada

    window.location.hash = "#/Registrarse";
    document.getElementById('root').innerHTML = registrar;
    loadRegistrar();

<<<<<<< HEAD
//return registrar;
=======
      <!--<div class="btons">
        <ul class="ejemplo">
        <li>
            <a class="atras" href="#/Atras" onclick="location.href = document.referrer; return false;">Atrás</a>
        </li>
        <li>
            <a class="btn-registro" href="#/Registrar">Registrarse</a>
        </li>
      </ul> 
      <div>-->
>>>>>>> bbf7692... update cambios ada

};

<<<<<<< HEAD

 const loadRegistrar = () => {
  const btnregistro = document.querySelector('#btn-registrarse');
  btnregistro.addEventListener('click', () => {
    sigupForm(Paginaprincipal);
   });
  }
=======
        </form>
   <!-- </main>-->
   </div>
   
    `;

    window.location.hash = "#/Registrarse";
    document.getElementById('root').innerHTML = registrar;
    loadRegistrar();

//return registrar;
>>>>>>> bbf7692... update cambios ada

/*
  function registro() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
      email,
      password,

    };

    if(email === '' || password === '') {
      alert('Debe rellenar todos los campos');
      //console('los campos no deben quedar vacios');
     }else {
      sigupForm(Paginaprincipal, user);
      alert('Te has registrado exitosamente');
     }

  };

<<<<<<< HEAD
     
}
*/
=======

 const loadRegistrar = () => {
  const btnregistro = document.querySelector('#btn-registrarse');
  btnregistro.addEventListener('click', registro);


  function registro() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
      email,
      password,

    };

    if(email === '' || password === '') {
      alert('Los campos no deben quedar vacios');
      //console('los campos no deben quedar vacios');
     }else {
      sigupForm(Paginaprincipal, user);
     // alert('Te has registrado exitosamente, inicie sesion con los datos de su cuenta!');
     }

  };
     
}
>>>>>>> bbf7692... update cambios ada
