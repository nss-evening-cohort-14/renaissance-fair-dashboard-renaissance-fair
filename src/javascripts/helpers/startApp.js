import foodButton from '../components/foodButton';
import domEvents from './domEvents';
import navEvents from './navEvents';
import domBuilder from './views/domBuilder';
import buildNav from '../components/navBuilder';
import headerTitle from '../components/headerTitle';
import staffButton from '../components/staffButton';

const startApp = () => {
  domEvents();
  domBuilder();
  foodButton();
  staffButton();
  buildNav();
  navEvents();
  headerTitle('Welcome to ye ol\' site');
};

export default startApp;
