import buildNav from '../components/navBuilder';
import domBuilder from './views/domBuilder';
import headerTitle from '../components/headerTitle';
import { domEvents } from '../events/domEvents';
import navEvents from '../events/navEvents';
import buttonBuilder from '../components/buttonBuilder';
import getEvents from './data/eventsData';
import footerBuilder from '../components/footerBuilder';
import logoutButton from '../components/buttons/logoutButton';
import loginButton from '../components/buttons/loginButton';

const startApp = (user) => {
  getEvents().then((response) => {
    domEvents();
    domBuilder();
    buildNav();
    navEvents(response.firebaseKey, user);
    buttonBuilder();
    headerTitle('Welcome to ye ol\' site');
    footerBuilder();
    if (user) {
      logoutButton();
    } else {
      loginButton();
    }
  });
};

export default startApp;
