import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './apiKeys';
import startApp from './startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    startApp(user);
  });
};

export default checkLoginStatus;
