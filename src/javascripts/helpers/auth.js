import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './apiKeys';
import startApp from './startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      startApp(user);
    }
  });
};

export default checkLoginStatus;
