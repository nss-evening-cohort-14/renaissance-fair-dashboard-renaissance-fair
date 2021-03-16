import foodButton from '../components/foodButton';
import headerTitle from '../components/headerTitle';
import waresButton from '../components/souvenirButton';
import staffButton from '../components/staffButton';
import getShows from './data/showsData';
import printShows from '../components/printShows';
import showsButton from '../components/showsButton';

const navEvents = () => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    headerTitle('Watch a Show');
    getShows().then((shows) => printShows(shows));
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
    showsButton();
    headerTitle('Welcome to ye ol\' home');
  });
};

export default navEvents;
