// USE WITH FIREBASE AUTH
import 'bootstrap';
import checkLoginStatus from './helpers/auth';
import '../styles/main.scss';

const init = () => {
  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
