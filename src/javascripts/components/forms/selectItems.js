import { getAllSouvenirs } from '../../helpers/data/souvenirData';
import { getAllShows } from '../../helpers/data/showsData';
import { getAllStaff } from '../../helpers/data/staffData';
import { getAllFood } from '../../helpers/data/foodData';

const selectFood = (selectedFoodArr) => {
  let domString = `<label for="food">Food</label>
    <div class="label-container">
      <label class="name-label">Name</label>
      <label class="quantity-label">Quantity</label>
    </div>
  <div class="checkbox-container">
    <ul class="check-box" id="ul-food">`;

  getAllFood().then((foodArr) => {
    foodArr.forEach((item) => {
      let checked = '';
      let count = '';
      if (selectedFoodArr) {
        selectedFoodArr.forEach((food) => {
          if (food.food_firebaseKey === item.firebaseKey) {
            checked = 'checked';
            count = food.count;
          }
        });
      }
      domString += `<li>
        <input type="checkbox" id="food_checkbox--${item.firebaseKey}"
          name="food_checkbox--${item.name}" value="${item.firebaseKey}" ${checked}>
          <label for="food_checkbox--${item.name}">${item.name}</label>
          <input type="number" class="module_count" min="0" step="1"
          id="food_count--${item.firebaseKey}" value="${count}"></li>`;
    });

    domString += '</ul></div>';
    document.querySelector('#select-food').innerHTML = domString;
  });
};

const selectStaff = (selectedStaffArr) => {
  let domString = `<label for="staff">Staff</label>
  <div class="checkbox-container">
  <ul class="check-box" id="ul-staff">`;

  getAllStaff().then((staffArray) => {
    staffArray.forEach((item) => {
      let checked = '';
      if (selectedStaffArr) {
        selectedStaffArr.forEach((staff) => {
          if (staff.staff_firebaseKey === item.firebaseKey) {
            checked = 'checked';
          }
        });
      }
      domString += `<li>
        <input type="checkbox" id="staff_checkbox--${item.firebaseKey}"
          name="staff_checkbox--${item.first_name}" value="${item.firebaseKey}" ${checked}>
          <label for="staff_checkbox--${item.first_name}">${item.first_name} ${item.last_name}</label></li>`;
    });

    domString += '</ul></div>';
    document.querySelector('#select-staff').innerHTML = domString;
  });
};

const selectShow = (selectedShowsArr) => {
  let domString = `<label for="shows">Shows</label>
    <div class="checkbox-container">
    <ul class="check-box" id="ul-show">`;

  getAllShows().then((showArray) => {
    showArray.forEach((item) => {
      let checked = '';
      if (selectedShowsArr) {
        selectedShowsArr.forEach((show) => {
          if (show.show_firebaseKey === item.firebaseKey) {
            checked = 'checked';
          }
        });
      }
      domString += `<li>
      <input type="checkbox" id="staff_checkbox--${item.firebaseKey}"
        name="show_checkbox--${item.name}" value="${item.firebaseKey}" ${checked}>
        <label for="show_checkbox--${item.name}">${item.name}</label></li>`;
    });

    domString += '</ul></div>';
    document.querySelector('#select-show').innerHTML = domString;
  });
};

const selectSouvenirs = (selectedSouvenirsArr) => {
  let domString = `<label for="souvenirs">Souvenirs</label>
    <div class="label-container">
      <label class="name-label">Name</label>
      <label class="quantity-label">Quantity</label>
    </div>
  <div class="checkbox-container">
    <ul class="check-box" id="ul-souvenir">`;

  getAllSouvenirs().then((souvenirArray) => {
    souvenirArray.forEach((item) => {
      let checked = '';
      let count = '';
      if (selectedSouvenirsArr) {
        selectedSouvenirsArr.forEach((souvenir) => {
          if (souvenir.souvenir_firebaseKey === item.firebaseKey) {
            checked = 'checked';
            count = souvenir.count;
          }
        });
      }
      domString += `<li>
        <input type="checkbox" id="souvenir_checkbox--${item.firebaseKey}"
          name="souvenir_checkbox--${item.name}" value="${item.firebaseKey}" ${checked}>
          <label for="souvenir_checkbox--${item.name}">${item.name}</label>
          <input type="number" class="module_count" min="0" step="1"
          id="souvenir_count--${item.firebaseKey}" value="${count}"></li>`;
    });

    domString += '</ul></div>';
    document.querySelector('#select-souvenir').innerHTML = domString;
  });
};

export {
  selectStaff, selectShow, selectSouvenirs, selectFood
};
