import buildNav from '../components/navBuilder';
import waresButton from '../components/souvenirButton';
import domEvents from './domEvents';
import navEvents from './navEvents';
import domBuilder from './views/domBuilder';

const startApp = () => {
  domEvents();
  domBuilder();
  buildNav();
  navEvents();
  waresButton();
};

export default startApp;
