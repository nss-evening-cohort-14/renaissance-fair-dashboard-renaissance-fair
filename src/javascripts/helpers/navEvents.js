import getShows from './data/showsData';

const navEvents = () => {
  document.querySelector('#shows-link').addEventListener('click', () => {
    getShows().then((shows) => console.warn(shows));
  });

  document.querySelector('#wares-link').addEventListener('click', () => {
    console.warn('wares');
  });

  document.querySelector('#court-link').addEventListener('click', () => {
    console.warn('court');
  });

  document.querySelector('#food-link').addEventListener('click', () => {
    console.warn('food');
  });
};

export default navEvents;
