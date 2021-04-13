import headerTitle from '../components/headerTitle';
import { getAllShows } from '../helpers/data/showsData';
import printShows from '../components/printShows';
import buttonBuilder from '../components/buttonBuilder';
import { getAllStaff } from '../helpers/data/staffData';
import { showStaff } from '../components/showStaff';
import { getAllFood } from '../helpers/data/foodData';
import showFood from '../components/showFood';
import { getAllSouvenirs } from '../helpers/data/souvenirData';
import { showSouvenirs } from '../components/showSouvenirs';
import printShowsReadOnly from '../components/readOnlyPrinters/showShowsReadOnly';
import { showStaffReadOnly } from '../components/readOnlyPrinters/showStaffReadOnly';
import showFoodReadOnly from '../components/readOnlyPrinters/showFoodReadOnly';
import { showSouvenirsReadOnly } from '../components/readOnlyPrinters/showSouvenirsReadOnly';
import { showEvents } from '../components/showEvents';
import { getAllEvents } from '../helpers/data/eventsData';

const navEvents = (id, user) => {
  document.querySelector('#events-link').addEventListener('click', () => {
    $('.create-food-btn').empty();
    console.warn('Events button');
    // getEvents(id).then((eventsArray) => showEvents(eventsArray));
    getAllEvents().then((eventsArray) => showEvents(eventsArray));
  });

  document.querySelector('#shows-link').addEventListener('click', () => {
    $('.create-food-btn').empty();
    if (user) {
      getAllShows().then((showsArray) => printShows(showsArray));
    } else {
      getAllShows().then((showsArray) => printShowsReadOnly(showsArray));
    }
  });

  document.querySelector('#souvenirs-link').addEventListener('click', () => {
    $('.create-food-btn').empty();
    headerTitle('Souvenirs');
    if (user) {
      getAllSouvenirs().then((souvenirArray) => showSouvenirs(souvenirArray));
    } else {
      getAllSouvenirs().then((souvenirArray) => showSouvenirsReadOnly(souvenirArray));
    }
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    $('.create-food-btn').empty();
    headerTitle('See Our Staff');
    if (user) {
      getAllStaff().then((staffArray) => showStaff(staffArray));
    } else {
      getAllStaff().then((staffArray) => showStaffReadOnly(staffArray));
    }
  });

  document.querySelector('#food-link').addEventListener('click', () => {
    if (user) {
      getAllFood().then((foodArray) => showFood(foodArray));
    } else {
      getAllFood().then((foodArray) => showFoodReadOnly(foodArray));
    }
  });
  document.querySelector('#home').addEventListener('click', () => {
    $('.create-food-btn').empty();
    buttonBuilder();
    headerTitle('Welcome to ye ol\' home');
  });
};

export default navEvents;
