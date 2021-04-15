import { getAllSouvenirs } from '../../helpers/data/souvenirData';
import { getAllShows } from '../../helpers/data/showsData';
import { getAllStaff } from '../../helpers/data/staffData';
import { getAllFood } from '../../helpers/data/foodData';

const selectFood = () => {
  let domString = `<label for="food">Food</label>
    <div class="label-container">
      <label class="name-label">Name</label>
      <label class="quantity-label">Quantity</label>
    </div>
  <div class="checkbox-container">
    <ul class="check-box" id="ul-food">`;

  getAllFood().then((foodArray) => {
    foodArray.forEach((item) => {
      domString += `<li>
        <input type="checkbox" id="food_checkbox--${item.firebaseKey}"
          name="food_checkbox--${item.name}" value="${item.firebaseKey}">
          <label for="food_checkbox--${item.name}">${item.name}</label>
          <input type="number" class="module_count" min="0" step="1"
          id="food_count--${item.firebaseKey}"/></li>`;
    });

    domString += '</ul></div>';
    document.querySelector('#select-food').innerHTML = domString;
  });
};

const selectStaff = () => {
  let domString = `<label for="staff">Staff</label>
  <div class="checkbox-container">
  <ul class="check-box" id="ul-staff">`;

  getAllStaff().then((staffArray) => {
    staffArray.forEach((item) => {
      domString += `<li>
        <input type="checkbox" id="staff_checkbox--${item.firebaseKey}"
          name="staff_checkbox--${item.first_name}" value="${item.firebaseKey}">
          <label for="staff_checkbox--${item.first_name}">${item.first_name} ${item.last_name}</label></li>`;
    });

    domString += '</ul></div>';
    document.querySelector('#select-staff').innerHTML = domString;
  });
};

const selectShow = () => {
  let domString = `<label for="shows">Shows</label>
    <div class="checkbox-container">
    <ul class="check-box" id="ul-show">`;

  getAllShows().then((showArray) => {
    showArray.forEach((item) => {
      domString += `<li>
      <input type="checkbox" id="staff_checkbox--${item.firebaseKey}"
        name="show_checkbox--${item.name}" value="${item.firebaseKey}">
        <label for="show_checkbox--${item.name}">${item.name}</label></li>`;
    });

    domString += '</ul></div>';
    document.querySelector('#select-show').innerHTML = domString;
  });
};

const selectSouvenirs = () => {
  let domString = `<label for="souvenirs">Souvenirs</label>
    <div class="label-container">
      <label class="name-label">Name</label>
      <label class="quantity-label">Quantity</label>
    </div>
  <div class="checkbox-container">
    <ul class="check-box" id="ul-souvenir">`;

  getAllSouvenirs().then((souvenirArray) => {
    souvenirArray.forEach((item) => {
      domString += `<li>
        <input type="checkbox" id="souvenir_checkbox--${item.firebaseKey}"
          name="souvenir_checkbox--${item.name}" value="${item.firebaseKey}">
          <label for="souvenir_checkbox--${item.name}">${item.name}</label>
          <input type="number" class="module_count" min="0" step="1"
          id="souvenir_count--${item.firebaseKey}"/></li>`;
    });
    domString += '</ul></div>';

    document.querySelector('#select-souvenir').innerHTML = domString;
  });
};

export {
  selectStaff, selectShow, selectSouvenirs, selectFood
};
