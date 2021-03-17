import headerTitle from '../components/headerTitle';
import souvenirsButton from '../components/souvenirButton';
import { getShows } from '../helpers/data/showsData';
import printShows from '../components/printShows';
import buttonBuilder from '../components/buttonBuilder';
import { getStaff } from '../helpers/data/staffData';
import { showStaff } from '../components/showStaff';

const navEvents = (id) => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    getShows(id).then((shows) => printShows(shows));
  });

  document.querySelector('#souvenirs-link').addEventListener('click', () => {
    souvenirsButton();
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    headerTitle('Staff Page');
    getStaff(id).then((staff) => showStaff(staff));
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
