// import showFood from '../components/showFood';
import showFood from '../components/showFood';
import getFood from './data/foodData';
import getStaff from './data/staffData';
import { showStaff } from '../components/showStaff';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('food-view')) {
      getFood('-MUuao2lynNljpuXaHnJ').then((foodArray) => showFood(foodArray));
    }

    if (e.target.id.includes('staff-view')) {
      getStaff('-MUuao2lynNljpuXaHnJ').then((staffArray) => showStaff(staffArray));
    }
  });
};

export default domEvents;
