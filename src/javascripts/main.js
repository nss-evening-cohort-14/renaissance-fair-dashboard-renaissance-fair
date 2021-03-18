// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
