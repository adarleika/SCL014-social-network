import { registrarse } from './templateRegistrarse.js'
<<<<<<< HEAD
import { post} from '../firebase.js'
import {leeme} from '../firebase.js'

=======
>>>>>>> bbf7692... update cambios ada

export const Paginaprincipal = () => {
    const posts = ` 
    <h1>crea tu post</h1>
    <textarea id="inputPost">Ingresa tu post</textarea>
    <button type="button" id="enviaPost"> Publicar </button>
    <p id="outputPost"></p>
    
    
    
    <!--<div class="contenedorInicio" id="inicio">-->
       <!-- <img src="img/logotipo1.png" class="logotipo" alt="logotipo">

            <main>
                <section>
                    <div id="search-container">
                        <input type="text" id="nameSearch" placeholder="Search for name">
                    </div>
                    <div class="botonespaprincipal">
                        <button class="loactual" id="loactual">Lo actual</button>
                        <button class="favoritos" id="favoritos"> Favoritos</button>
                        <button class="guardados" id="guardados"> Guardados</button>
                    </div>
                </section>
                <textarea  id="cuadroEscrito"> Envia tu Post</textarea>
                <button type="button" id="botonEnvia">Envia Post</button>
                <p id="outputPost"> </p>  -->
        <!--        <div class="contenedorprincipal" id="inicio"> 
                    <ul class="posts" id="posts">
                    
                    </ul>
                </div>   -->

<<<<<<< HEAD
                <!--  </main>
             <div class="btn-imagenes">
                <img class="previous" src="img/previous.png" alt="">
                <img class="house" src="img/house.png" alt="">
                <img class="heart" src="img/heart.png" alt="">
            </div> -->
=======
            </main>
            <div class="btn-imagenes">
                <img class="previous" src="img/previous.png" alt="">
                <img class="house" src="img/house.png" alt="">
                <img class="heart" src="img/heart.png" alt="">
            </div>
>>>>>>> bbf7692... update cambios ada
   <!-- </div>-->
   
  `;
<<<<<<< HEAD
=======

  window.location.hash = "#/Posts";
  document.getElementById('root').innerHTML = posts;
  LoadPosts();

 // return posts;
>>>>>>> bbf7692... update cambios ada

  window.location.hash = "#/Posts";
 document.getElementById('root').innerHTML = posts;
 
 LoadPosts();
 leeme(); 
//  return posts;
};

<<<<<<< HEAD
 export const LoadPosts = () => {
     document.getElementById('enviaPost')
     .addEventListener('click', () =>{
        const inputPosts = document.getElementById('inputPost').value;
        post(inputPosts);
        

     })
    // Función que lleva desde logo segunda pagina a primera página
    
  };


=======
const LoadPosts = () => {
    // Función que lleva desde logo segunda pagina a primera página
    const posts = document.getElementById('posts');
    posts.addEventListener('click', registrarse);
  };

>>>>>>> bbf7692... update cambios ada


