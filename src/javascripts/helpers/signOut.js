import firebase from 'firebase/app';
import 'firebase/auth';

const signOut = () => {
  firebase.auth().signOut();
};

export default signOut;
