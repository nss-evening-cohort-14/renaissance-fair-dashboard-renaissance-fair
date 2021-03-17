import buildNav from '../components/navBuilder';
import domBuilder from './views/domBuilder';
import headerTitle from '../components/headerTitle';
import domEvents from './domEvents';
import navEvents from '../events/navEvents';
import buttonBuilder from '../components/buttonBuilder';
import getEvents from './data/eventsData';
import footerBuilder from '../components/footerBuilder';

const startApp = () => {
  getEvents().then((response) => {
    domEvents(response.firebaseKey);
    domBuilder();
    buildNav();
    navEvents(response.firebaseKey);
    buttonBuilder();
    headerTitle('Welcome to ye ol\' site');
    footerBuilder();
  });
};

export default startApp;
