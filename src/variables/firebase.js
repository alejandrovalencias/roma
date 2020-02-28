//inicializar firebase
import * as firebase from 'firebase';
import 'firebase/firestore';
const config = {
  apiKey: "AIzaSyDqfxn92gpRGc2iiv9aqe9bKFRZP8aEsWA",
  //   authDomain: "dispositivosbd-1af7b.firebaseapp.com",
  databaseURL: "https://servifrenos-bc236.firebaseio.com",
  projectId: "servifrenos-bc236"
  //   storageBucket: "dispositivosbd-1af7b.appspot.com",
  //   messagingSenderId: "27059847042",
  //   appId: "1:27059847042:web:15f0c1ee3e3671b2"
};

firebase.initializeApp(config);
export default firebase;