import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-success">WELCOME</button>';
  $('#auth-button').html(domString);
  $('#google-auth').click(signMeIn);
};

export default loginButton;
