
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyD5xpW_-dUcTj7L2tLgADdRAeOAS0yDayw",
  authDomain: "tesla-c5e3d.firebaseapp.com",
  projectId: "tesla-c5e3d",
  storageBucket: "tesla-c5e3d.appspot.com",
  messagingSenderId: "931831706801",
  appId: "1:931831706801:web:87db8068460c4adfd01e90"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db, auth};
  