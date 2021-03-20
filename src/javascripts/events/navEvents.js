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
import printShowsReadOnly from '../components/readOnlyPrinters/showShowsReadOnly';
import { showStaffReadOnly } from '../components/readOnlyPrinters/showStaffReadOnly';
import showFoodReadOnly from '../components/readOnlyPrinters/showFoodReadOnly';
import { showSouvenirsReadOnly } from '../components/readOnlyPrinters/showSouvenirsReadOnly';

const navEvents = (id, user) => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    $('.create-food-btn').empty();
    if (user) {
      getShows(id).then((showsArray) => printShows(showsArray));
    } else {
      getShows(id).then((showsArray) => printShowsReadOnly(showsArray));
    }
  });

  document.querySelector('#souvenirs-link').addEventListener('click', () => {
    $('.create-food-btn').empty();
    headerTitle('Souvenirs');
    if (user) {
      getSouvenirs(id).then((souvenirArray) => showSouvenirs(souvenirArray));
    } else {
      getSouvenirs(id).then((souvenirArray) => showSouvenirsReadOnly(souvenirArray));
    }
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    $('.create-food-btn').empty();
    headerTitle('See Our Staff');
    if (user) {
      getStaff(id).then((staffArray) => showStaff(staffArray));
    } else {
      getStaff(id).then((staffArray) => showStaffReadOnly(staffArray));
    }
  });

  document.querySelector('#food-link').addEventListener('click', () => {
    if (user) {
      getFood(id).then((foodArray) => showFood(foodArray));
    } else {
      getFood(id).then((foodArray) => showFoodReadOnly(foodArray));
    }
  });
  document.querySelector('#home').addEventListener('click', () => {
    $('.create-food-btn').empty();
    buttonBuilder();
    headerTitle('Welcome to ye ol\' home');
  });
};

export default navEvents;
