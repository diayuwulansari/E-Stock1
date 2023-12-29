import {initializeApp} from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAzDkWSPE7mrRBJwOyIcUySUWSWUOni5qI",
  authDomain: "e-stock-dde87.firebaseapp.com",
  databaseURL: "https://e-stock-dde87-default-rtdb.firebaseio.com",
  projectId: "e-stock-dde87",
  storageBucket: "e-stock-dde87.appspot.com",
  messagingSenderId: "338912322691",
  appId: "1:338912322691:web:65354c03d8d815e8bf27b6",
};

const app = initializeApp(firebaseConfig);

export default app; 