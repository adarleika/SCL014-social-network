/*
export const sigupForm = (sigupEmail, sigupPassword) => {
      console.log('aqui entra')
      firebase.auth().createUserWithEmailAndPassword(sigupEmail, sigupPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]

    }


export const sigupForm = (callback) => {
    console.log('aqui entra');
      // sigupForm.addEventListener('submit', (e) => {
        //  e.preventDefault();
  
          const sigupEmail = document.querySelector('#email').value;
          const sigupPassword = document.querySelector('#password').value;
  
          console.log(sigupEmail, sigupPassword);
    
          firebase.auth().createUserWithEmailAndPassword(sigupEmail, sigupPassword)
          .then(() => {
              //sigupForm.reset();
              callback ();
              console.log (callback)
          })
          .catch((error) => {
            const codigoerror = error.code;
  
            if (codigoerror === 'auth/email-already-in-use'){
              alert('El Correo electronico ' + sigupEmail + ' ya se encuentra registrado');
              alert('Intente iniciar sesion con un correo registrado');
              console.log('El Correo electronico ' + sigupEmail + ' ya se encuentra registrado');   
            }  else{
              //aqui va todo lo relacionado con error del usuario, por loq ue cambie el ms de te conectaste
              alert('Intente ingresar datos');
            };
            console.log(error);      
              //if (userCredential = true)  {
              //console.log('te conectaste guachita')
  
             // }else {
             //     console.log('no estas registrado')
              //}
          });
              
          
  
   }
  

export const inicioGoogle = (callback) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //var token = result.credential.accessToken;
    // The signed-in user info.
    //var user = result.user;
    console.log (result.user)
    callback ();
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    //var errorMessage = error.message;
    // The email of the user's account used.
    //var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    //var credential = error.credential;
   // if (errorCode === 'auth/wrong-password') {
    //  alert('Contraseña erronea.');
  //}
      //     console.log(error);
       //    console.log('error',errorMessage)
   
     /* auth.signInWithPopup(provider)
      .then(result => {
          console.log('inicio con google')
     })
     .catch(err => {
         console.log(err)
      })
  */
  

//loguerase, esto lo llamaremos depsues en el template logearse
//export const signIn = () => {
export const signIn = (callback) => {
  console.log ('estamos en funcion SingIn');
  
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(email, password);

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            callback();
        })
        .catch((error) => {
            const errorCode = error.code;

            if (errorCode === 'auth/wrong-password' || 'auth/invalid-email') {
                alert('Revisa tus datos.');
            } else {
                alert('¡Ingrese un correo valido!');
            };
            console.log(error);
        });
   
 
};

export const post=(inputPosts) =>{
  const db = firebase.firestore();
  const usuario = () => firebase.auth()
  .currentUser;
  const user= usuario();
  // Add a second document with a generated ID.
  db.collection("post").add({
  email:user.email,
  nombre:user.displayName,
  post:inputPosts,
  uid:user.uid,
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});


}

export const leeme = () =>{
  console.log ("entra aqui")
  const db = firebase.firestore();
  db.collection("post").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);

        
        const muestrame = document.getElementById('outputPost');
        const infoPost = `<h3> queremos ver quien escribe: ${doc.data().nombre? doc.data().nombre : doc.data().email} </h3>
          <p>${doc.data().post}</p>
          `;
          muestrame.innerHTML+=infoPost;
    });
});

}
<<<<<<< HEAD
=======

//datos para el perfil
export const perfil=(inputPosts) =>{
  const db = firebase.firestore();
  const usuario = () => firebase.auth()
  .currentUser;
  const user= usuario();
  // Add a second document with a generated ID.
  db.collection("perfil").add({
  
  nombre:user.displayName,
  email:user.email,
  uid:user.uid,
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});


}

export const leemePerfil = () =>{
  console.log ("entra aqui")
  const db = firebase.firestore();
  db.collection("post").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);

        
        const muestramePerfil = document.getElementById('trabaja');
        const infoPerfil = `<h3> queremos ver quien escribe: ${doc.data().nombre? doc.data().nombre : doc.data().email} </h3>
          <p>${doc.data().perfil}</p>
          `;
          muestrame.innerHTML+=infoPerfil;
    });
});

}
>>>>>>> a28dcbb8bbf1457a1b96b86328f5ce7bcd603c7a
