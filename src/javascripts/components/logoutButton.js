import firebase from 'firebase/app';
import 'firebase/auth';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  $('#login-form-container').html(domString);
  $('#google-auth').click(signMeOut);
};

export default logoutButton;
