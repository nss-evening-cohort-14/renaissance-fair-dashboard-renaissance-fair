import foodButton from './foodButton';
import showsButton from './showsButton';
import souvenirsButton from './souvenirButton';
import staffButton from './staffButton';

const buttonBuilder = () => {
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML += foodButton();
  document.querySelector('#content-container').innerHTML += souvenirsButton();
  document.querySelector('#content-container').innerHTML += staffButton();
  document.querySelector('#content-container').innerHTML += showsButton();
};

export default buttonBuilder;
