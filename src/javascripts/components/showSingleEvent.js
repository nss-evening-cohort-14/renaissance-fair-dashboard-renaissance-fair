import { getSingleFood } from '../helpers/data/foodData';
import { getSingleShow } from '../helpers/data/showsData';
import { getSingleStaff } from '../helpers/data/staffData';
import { getSingleSouvenir } from '../helpers/data/souvenirData';

const foodQuad = (foodArr) => {
  const foodQuadrant = document.querySelector('#food-quad');
  foodQuadrant.innerHTML = '';
  foodQuadrant.innerHTML = '<ul class="item-list">';
  foodArr.forEach((foodItem) => {
    getSingleFood(foodItem.food_firebaseKey).then((foodObj) => {
      foodQuadrant.innerHTML += `<li>${foodObj.name}</li>`;
    });
  });
  foodQuadrant.innerHTML += '</ul>';
};

const showQuad = (showArr) => {
  const showQuadrant = document.querySelector('#show-quad');
  showQuadrant.innerHTML = '';
  showQuadrant.innerHTML = '<ul class="item-list">';
  showArr.forEach((showItem) => {
    getSingleShow(showItem.show_firebaseKey).then((showObj) => {
      showQuadrant.innerHTML += `<li>${showObj.name}</li>`;
    });
  });
  showQuadrant.innerHTML += '</ul>';
};

const staffQuad = (staffArr) => {
  const staffQuadrant = document.querySelector('#staff-quad');
  staffQuadrant.innerHTML = '';
  staffQuadrant.innerHTML = '<ul class="item-list">';
  staffArr.forEach((showItem) => {
    getSingleStaff(showItem.staff_firebaseKey).then((staffObj) => {
      staffQuadrant.innerHTML += `<li>${staffObj.first_name} ${staffObj.last_name}</li>`;
    });
  });
  staffQuadrant.innerHTML += '</ul>';
};

const souvenirQuad = (souvenirArr) => {
  const souvenirQuadrant = document.querySelector('#souvenir-quad');
  souvenirQuadrant.innerHTML = '';
  souvenirQuadrant.innerHTML = '<ul class="item-list">';
  souvenirArr.forEach((showItem) => {
    getSingleSouvenir(showItem.souvenir_firebaseKey).then((souvenirObj) => {
      souvenirQuadrant.innerHTML += `<li>${souvenirObj.name}</li>`;
    });
  });
  souvenirQuadrant.innerHTML += '</ul>';
};

const showSingleEvent = (Obj) => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML += '<div class="event-quadrant"><h3>Food</h3><div id="food-quad"></div></div><div class="event-quadrant"><h3>Staff</h3><div id="staff-quad"></div></div><div class="event-quadrant"><h3>Shows</h3><div id="show-quad"></div><div class="event-quadrant"><h3>Souvenirs</h3><div id="souvenir-quad"></div>';
  foodQuad(Obj.food);
  showQuad(Obj.shows);
  staffQuad(Obj.staff);
  souvenirQuad(Obj.souvenirs);
};

export default showSingleEvent;
