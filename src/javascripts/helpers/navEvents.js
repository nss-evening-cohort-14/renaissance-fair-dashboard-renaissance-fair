import headerTitle from '../components/headerTitle';
import buttonBuilder from '../components/buttonBuilder';
import getSouvenirs from './data/souvenirData';
import { buildSouvenirs } from '../components/buildSouvenirs';

const navEvents = () => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    console.warn('shows');
  });

  document.querySelector('#wares-link').addEventListener('click', () => {
    getSouvenirs('-MUuao2lynNljpuXaHnJ').then((souvenirArray) => buildSouvenirs(souvenirArray));
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    console.warn('court');
  });

  document.querySelector('#food-link').addEventListener('click', () => {
    console.warn('food');
  });
  document.querySelector('#home').addEventListener('click', () => {
    buttonBuilder();
    headerTitle('Welcome to ye ol\' home');
  });
};

export default navEvents;
