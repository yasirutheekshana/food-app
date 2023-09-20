import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCaA7a7y3EgVd04444o-utRdirkopqOLpY",
    authDomain: "food-app-afc1d.firebaseapp.com",
    projectId: "food-app-afc1d",
    storageBucket: "food-app-afc1d.appspot.com",
    messagingSenderId: "548609337210",
    appId: "1:548609337210:web:125639795abdcc16ae18c3"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };