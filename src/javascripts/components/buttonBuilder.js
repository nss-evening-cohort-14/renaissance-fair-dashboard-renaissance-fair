import foodButton from './foodButton';
import waresButton from './souvenirButton';

const buttonBuilder = () => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML += foodButton();
  document.querySelector('#content-container').innerHTML += waresButton();
};

export default buttonBuilder;
