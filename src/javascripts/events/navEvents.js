import headerTitle from '../components/headerTitle';
import souvenirsButton from '../components/souvenirButton';
import getShows from '../helpers/data/showsData';
import printShows from '../components/printShows';
import buttonBuilder from '../components/buttonBuilder';

const navEvents = () => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    headerTitle('Watch a Show');
    getShows('-MUuao2lynNljpuXaHnJ').then((shows) => printShows(shows));
  });

  document.querySelector('#souvenirs-link').addEventListener('click', () => {
    souvenirsButton();
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    console.warn('court-link');
  });

  document.querySelector('#food-link').addEventListener('click', () => {
    console.warn('food');
  });
  document.querySelector('#home').addEventListener('click', () => {
    buttonBuilder();
    headerTitle('Welcome to ye ol\' home');
  });
};

export default navEvents;
