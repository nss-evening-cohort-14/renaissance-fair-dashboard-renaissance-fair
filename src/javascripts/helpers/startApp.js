import foodButton from '../components/foodButton';
import domEvents from './domEvents';
import navEvents from './navEvents';
import domBuilder from './views/domBuilder';
import buildNav from '../components/navBuilder';

const startApp = () => {
  domEvents();
  domBuilder();
  foodButton();
  buildNav();
  navEvents();
};

export default startApp;
