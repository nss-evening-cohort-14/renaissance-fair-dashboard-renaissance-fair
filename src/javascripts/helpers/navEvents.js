import headerTitle from '../components/headerTitle';
import waresButton from '../components/souvenirButton';
import getShows from './data/showsData';
import printShows from '../components/printShows';
import buttonBuilder from '../components/buttonBuilder';
import getStaff from './data/staffData';
import { showStaff } from '../components/showStaff';

const navEvents = () => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    headerTitle('Watch a Show');
    getShows().then((shows) => printShows(shows));
  });

  document.querySelector('#wares-link').addEventListener('click', () => {
    waresButton();
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    headerTitle('Staff Page');
    getStaff('-MUuao2lynNljpuXaHnJ').then((staff) => showStaff(staff));
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
