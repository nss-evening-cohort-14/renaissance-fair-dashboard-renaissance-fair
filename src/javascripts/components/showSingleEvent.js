import 'firebase/auth';
import { getSingleFood } from '../helpers/data/foodData';
import { getSingleShow } from '../helpers/data/showsData';
import { getSingleStaff } from '../helpers/data/staffData';
import { getSingleSouvenir } from '../helpers/data/souvenirData';
import { getSingleEvent } from '../helpers/data/eventsData';

const foodQuad = (foodArr) => {
  const foodQuadrant = document.querySelector('#food-quad');
  foodQuadrant.innerHTML = '';
  foodQuadrant.innerHTML = '<div class="container item-list" id="food-list"></div>';
  document.querySelector('#food-list').innerHTML = `
    <div class="row row-header">
      <div class="col-9 list-name">Name</div>
      <div class="col-3 list-count">Count</div>
    </div>`;
  foodArr.forEach((foodItem) => {
    getSingleFood(foodItem.food_firebaseKey).then((foodObj) => {
      document.querySelector('#food-list').innerHTML += `
      <div class="row">
        <div class="col-9 list-name">${foodObj.name}</div>
        <div class="col-3 list-count">${foodItem.count}</div>
      </div>`;
    });
  });
};

const showQuad = (showArr) => {
  const showQuadrant = document.querySelector('#show-quad');
  showQuadrant.innerHTML = '';
  showQuadrant.innerHTML = '<div class="container item-list" id="show-list"></div>';
  showArr.forEach((showItem) => {
    getSingleShow(showItem.show_firebaseKey).then((showObj) => {
      document.querySelector('#show-list').innerHTML += `
        <div class="col list-name">${showObj.name}</div>`;
    });
  });
};

const staffQuad = (staffArr) => {
  const staffQuadrant = document.querySelector('#staff-quad');
  staffQuadrant.innerHTML = '';
  staffQuadrant.innerHTML = '<div class="container item-list" id="staff-list"></div>';
  staffArr.forEach((showItem) => {
    getSingleStaff(showItem.staff_firebaseKey).then((staffObj) => {
      document.querySelector('#staff-list').innerHTML += `
        <div class="row">
          <div class="col list-name">${staffObj.first_name} ${staffObj.last_name}</div>
        </div>`;
    });
  });
};

const souvenirQuad = (souvenirArr) => {
  const souvenirQuadrant = document.querySelector('#souvenir-quad');
  souvenirQuadrant.innerHTML = '';
  souvenirQuadrant.innerHTML = '<div class="container item-list" id="souvenir-list"></div>';
  document.querySelector('#souvenir-list').innerHTML = `
    <div class="row row-header">
      <div class="col-9 list-name">Name</div>
      <div class="col-3 list-count">Count</div>
    </div>`;
  souvenirArr.forEach((showItem) => {
    getSingleSouvenir(showItem.souvenir_firebaseKey).then((souvenirObj) => {
      document.querySelector('#souvenir-list').innerHTML += `
      <div class="row">
        <div class="col-9 list-name">${souvenirObj.name}</div>
        <div class="col-3 list-count">${showItem.count}</div>
      </div>`;
    });
  });
};

// const eventName = ()

const showSingleEvent = (Obj, eventId) => {
  getSingleEvent(eventId).then((eventObj) => {
    document.querySelector('#content-container').innerHTML = '';
    document.querySelector('#add-button-container').innerHTML = '';
    document.querySelector('#content-container').innerHTML += `
      <div class="event-a">
        <div class="l" id="event-name"><h1>${eventObj.title}<h1></div>
      </div>
        <div class="event-b"><div class="l" id="event-date"><h2>${eventObj.date}</h2></div>
      </div>
      <div class="event-quad">
        <h2>Shows</h2>
        <div class="l" id="show-quad"></div>
      </div>
      <div class="event-quad">
        <h2>Staff</h2>
        <div class="l" id="staff-quad"></div>
      </div>
      <div class="event-quad">
        <h2>Food</h2>
        <div class="l" id="food-quad"></div>
      </div>
      </div><div class="event-quad">
        <h2>Souvenirs</h2>
        <div class="l" id="souvenir-quad"></div>
      </div>`;
    foodQuad(Obj.food);
    showQuad(Obj.shows);
    staffQuad(Obj.staff);
    souvenirQuad(Obj.souvenirs);
  });
};

export default showSingleEvent;
