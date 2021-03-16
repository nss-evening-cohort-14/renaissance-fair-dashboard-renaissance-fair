import waresButton from '../components/souvenirButton';

const navEvents = () => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    console.warn('shows');
  });

  document.querySelector('#wares-link').addEventListener('click', () => {
    waresButton();
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    console.warn('court');
  });

  document.querySelector('#food-link').addEventListener('click', () => {
    console.warn('food');
  });
};

export default navEvents;
