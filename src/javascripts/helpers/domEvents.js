// import showFood from '../components/showFood';
import printShows from '../components/printShows';
import showFood from '../components/showFood';
import getFood from './data/foodData';
import getShows from './data/showsData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('food-view')) {
      getFood('-MUuao2lynNljpuXaHnJ').then((foodArray) => showFood(foodArray));
    }
    if (e.target.id.includes('shows-view')) {
      getShows().then((showsArray) => printShows(showsArray));
    }
  });
};

export default domEvents;
