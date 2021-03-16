import foodButton from '../components/foodButton';
import headerTitle from '../components/headerTitle';
import waresButton from '../components/souvenirButton';
import staffButton from '../components/staffButton';

const navEvents = () => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    console.warn('shows');
  });

  document.querySelector('#wares-link').addEventListener('click', () => {
    waresButton();
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    console.warn('court-link');
  });

  document.querySelector('#food-link').addEventListener('click', () => {
    console.warn('food');
  });
  document.querySelector('#home').addEventListener('click', () => {
    foodButton();
    staffButton();
    headerTitle('Welcome to ye ol\' home');
  });
};

export default navEvents;
