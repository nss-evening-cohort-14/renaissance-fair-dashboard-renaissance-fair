import headerTitle from '../components/headerTitle';
import { getShows } from '../helpers/data/showsData';
import printShows from '../components/printShows';
import buttonBuilder from '../components/buttonBuilder';
import { getStaff } from '../helpers/data/staffData';
import { showStaff } from '../components/showStaff';
import { getFood } from '../helpers/data/foodData';
import showFood from '../components/showFood';
import { getSouvenirs } from '../helpers/data/souvenirData';
import { showSouvenirs } from '../components/showSouvenirs';

const navEvents = (id) => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    getShows(id).then((shows) => printShows(shows));
  });

  document.querySelector('#souvenirs-link').addEventListener('click', () => {
    headerTitle('Souvenirs');
    getSouvenirs(id).then((souvenirArray) => showSouvenirs(souvenirArray));
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    headerTitle('Staff Page');
    getStaff(id).then((staff) => showStaff(staff));
  });

  document.querySelector('#food-link').addEventListener('click', () => {
    getFood(id).then((foodArr) => showFood(foodArr));
  });
  document.querySelector('#home').addEventListener('click', () => {
    buttonBuilder();
    headerTitle('Welcome to ye ol\' home');
  });
};

export default navEvents;
