import headerAnimation from '../../assets/resized-animate.mp4';
import entertainmentAnimation from '../../assets/entertainment-animate.mp4';
import eventAnimation from '../../assets/event-animate.mp4';
import foodAnimation from '../../assets/food-animate.mp4';
import souvenirAnimation from '../../assets/souvenir-animate.mp4';
import staffAnimation from '../../assets/staff-animate.mp4';

const animation = `<video width="1000" height="400" autoplay muted>
                    <source src="${headerAnimation}" type="video/mp4">
                 </video>`;
const headerTitle = () => {
  const domString = `<div class="jumbotron text-center">
  <div id="animate-container">
  </div>
</div>`;
  document.querySelector('#header-container').innerHTML = domString;
  document.querySelector('#animate-container').innerHTML = animation;
};

const entertainment = `<video width="1000" height="400" autoplay muted>
                    <source src="${entertainmentAnimation}" type="video/mp4">
                 </video>`;
const entertainmentTitle = () => {
  const domString = `<div class="jumbotron text-center">
  <div id="animate-container">
  </div>
</div>`;
  document.querySelector('#header-container').innerHTML = domString;
  document.querySelector('#animate-container').innerHTML = entertainment;
};

const event = `<video width="1000" height="400" autoplay muted>
                    <source src="${eventAnimation}" type="video/mp4">
                 </video>`;
const eventTitle = () => {
  const domString = `<div class="jumbotron text-center">
  <div id="animate-container">
  </div>
</div>`;
  document.querySelector('#header-container').innerHTML = domString;
  document.querySelector('#animate-container').innerHTML = event;
};

const food = `<video width="1000" height="400" autoplay muted>
                    <source src="${foodAnimation}" type="video/mp4">
                 </video>`;
const foodTitle = () => {
  const domString = `<div class="jumbotron text-center">
  <div id="animate-container">
  </div>
</div>`;
  document.querySelector('#header-container').innerHTML = domString;
  document.querySelector('#animate-container').innerHTML = food;
};

const souvenir = `<video width="1000" height="400" autoplay muted>
                    <source src="${souvenirAnimation}" type="video/mp4">
                 </video>`;
const souvenirTitle = () => {
  const domString = `<div class="jumbotron text-center">
  <div id="animate-container">
  </div>
</div>`;
  document.querySelector('#header-container').innerHTML = domString;
  document.querySelector('#animate-container').innerHTML = souvenir;
};

const staff = `<video width="1000" height="400" autoplay muted>
                    <source src="${staffAnimation}" type="video/mp4">
                 </video>`;
const staffTitle = () => {
  const domString = `<div class="jumbotron text-center">
  <div id="animate-container">
  </div>
</div>`;
  document.querySelector('#header-container').innerHTML = domString;
  document.querySelector('#animate-container').innerHTML = staff;
};

export {
  headerTitle,
  entertainmentTitle,
  eventTitle,
  foodTitle,
  souvenirTitle,
  staffTitle
};
