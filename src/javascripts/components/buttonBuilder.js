import firebase from 'firebase/app';
import 'firebase/auth';
import eventsButton from './eventsButton';
import foodButton from './foodButton';
import showsButton from './showsButton';
import souvenirsButton from './souvenirButton';
import staffButton from './staffButton';

const buttonBuilder = () => {
  const user = firebase.auth().currentUser;
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML += foodButton();
  document.querySelector('#content-container').innerHTML += souvenirsButton();
  document.querySelector('#content-container').innerHTML += staffButton();
  document.querySelector('#content-container').innerHTML += showsButton();
  if (user) {
    document.querySelector('#content-container').innerHTML += eventsButton();
  }
};

export default buttonBuilder;
