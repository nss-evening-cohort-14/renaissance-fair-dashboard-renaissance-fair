import foodButton from './foodButton';
import showsButton from './showsButton';
import waresButton from './souvenirButton';
import staffButton from './staffButton';

const buttonBuilder = () => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML += foodButton();
  document.querySelector('#content-container').innerHTML += waresButton();
  document.querySelector('#content-container').innerHTML += staffButton();
  document.querySelector('#content-container').innerHTML += showsButton();
};

export default buttonBuilder;
