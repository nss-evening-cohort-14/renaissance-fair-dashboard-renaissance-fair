import buildNav from '../components/navBuilder';
import domBuilder from './views/domBuilder';
import headerTitle from '../components/headerTitle';
import domEvents from './domEvents';
import navEvents from './navEvents';
import buttonBuilder from '../components/buttonBuilder';

const startApp = () => {
  domEvents();
  domBuilder();
  buildNav();
  navEvents();
  buttonBuilder();
  headerTitle('Welcome to ye ol\' site');
};

export default startApp;
