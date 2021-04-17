import 'bootstrap';
import checkLoginStatus from './helpers/auth';
import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
};

init();
