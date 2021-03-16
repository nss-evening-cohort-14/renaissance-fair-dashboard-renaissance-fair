import getShows from './data/showsData';
import foodButton from '../components/foodButton';
import headerTitle from '../components/headerTitle';
import printShows from '../components/printShows';
import showsButton from '../components/showsButton';

const navEvents = () => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    headerTitle('Watch a Show');
    getShows().then((shows) => printShows(shows));
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
    showsButton();
    headerTitle('Welcome to ye ol\' home');
  });
};

export default navEvents;
