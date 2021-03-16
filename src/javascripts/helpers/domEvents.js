// import showFood from '../components/showFood';
import showFood from '../components/showFood';
import getFood from './data/foodData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('food-view')) {
      getFood('-MUuao2lynNljpuXaHnJ').then((foodArray) => showFood(foodArray));
    }
  });
};

export default domEvents;
