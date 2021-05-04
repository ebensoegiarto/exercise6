import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC3Hs0nuWNj0o4jQxX2iD_OqsKdC1J1j0A",
    authDomain: "webprobelajar.firebaseapp.com",
    databaseURL: "https://webprobelajar-default-rtdb.firebaseio.com",
    projectId: "webprobelajar",
    storageBucket: "webprobelajar.appspot.com",
    messagingSenderId: "280386554700",
    appId: "1:280386554700:web:f9a42355d71e4e0046dde9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase