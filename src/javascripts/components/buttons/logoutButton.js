import firebase from 'firebase/app';
import 'firebase/auth';
import { eventListeners } from '../../events/domEvents';

const signMeOut = () => {
  firebase.auth().signOut();
  document.querySelector('body').removeEventListener('click', eventListeners);
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">FAREWELL</button>';
  $('#auth-button').html(domString);
  $('#google-auth').click(signMeOut);
};

export default logoutButton;
