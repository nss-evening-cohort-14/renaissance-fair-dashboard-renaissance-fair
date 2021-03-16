import getShows from './data/showsData';
import foodButton from '../components/foodButton';
import headerTitle from '../components/headerTitle';

const navEvents = () => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    getShows().then((shows) => console.warn(shows));
  });

  document.querySelector('#wares-link').addEventListener('click', () => {
    console.warn('wares');
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    console.warn('court');
  });

  document.querySelector('#food-link').addEventListener('click', () => {
    console.warn('food');
  });
  document.querySelector('#home').addEventListener('click', () => {
    foodButton();
    headerTitle('Welcome to ye ol\' home');
  });
};

export default navEvents;
