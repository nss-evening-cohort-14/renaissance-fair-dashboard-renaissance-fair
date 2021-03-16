import foodButton from '../components/foodButton';
import domEvents from './domEvents';
import domBuilder from './views/domBuilder';

const startApp = () => {
  domEvents();
  domBuilder();
  foodButton();
};

export default startApp;
