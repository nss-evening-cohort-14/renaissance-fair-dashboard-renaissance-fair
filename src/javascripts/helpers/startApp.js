import buildNav from '../components/navBuilder';
import domEvents from './domEvents';
import navEvents from './navEvents';
import domBuilder from './views/domBuilder';

const startApp = () => {
  domEvents();
  domBuilder();
  buildNav();
  navEvents();
};

export default startApp;
