import { buildSouvenirs } from '../components/buildSouvenirs';
import getSouvenirs from './data/souvenirData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('souvenir-view')) {
      getSouvenirs('-MUuao2lynNljpuXaHnJ').then((souvenirArray) => buildSouvenirs(souvenirArray));
    }
  });
};

export default domEvents;
