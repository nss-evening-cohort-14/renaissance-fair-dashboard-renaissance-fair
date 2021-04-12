import { getFood } from '../../helpers/data/foodData';

const selectMainCourseOne = () => {
  let domString = `<label for="mainCourseChoice1">Main Course Choice 1</label>
  <select class="form-control" id="main-course-1">
  <option value="">Select a Main Course</option>`;
  
  // Might need to refactor getFood promise => it has event_id rule on it
  getFood(obj.firebaseKey).then((foodArray) => {
    foodArray.forEach((item) => {
      domstring += `<option value="${item.firebaseKey}">${item.name}</option>`;
    });

    domString += '</select>';

    document.querySelector('#select-main-course-1').innerHTML = domString;

  });
};

const selectMainCourseTwo = () => {
  let domString = `<label for="mainCourseChoice2">Main Course Choice 2</label>
  <select class="form-control" id="main-course-2">
  <option value="">Select a Main Course</option>`;

  getFood(obj.firebaseKey).then((foodArray) => {
    foodArray.forEach((item) => {
      domstring += `<option value="${item.firebaseKey}">${item.name}</option>`;
    });

    domString += '</select>';

    document.querySelector('#select-main-course-1').innerHTML = domString;

  });
};

const selectDesert = () => {
  let domString = `<label for="desert">Desert</label>
  <select class="form-control" id="desert">
  <option value="">Select a Desert</option>`;

  getFood(obj.firebaseKey).then((foodArray) => {
    foodArray.forEach((item) => {
      domstring += `<option value="${item.firebaseKey}">${item.name}</option>`;
    });

    domString += '</select>';

    document.querySelector('#select-main-course-1').innerHTML = domString;

  });
};

const selectStaff = () => {
  let domString = `<label for="staff">Staff</label>
  <select multiple class="form-control" id="staff-option">
  <option value="">Select a Desert</option>`;

  getStaff(obj.firebaseKey).then((staffArray) => {
    staffArray.forEach((item) => {
      domstring += `<option value="${item.firebaseKey}">${item.name}</option>`;
    });

    domString += `<option value="${item.firebaseKey}">${item.name}</option>`;

    document.querySelector('#select-staff').innerHTML = domString;

  });

  const selectShow = () => {
    let domString = `<label for="staff">Staff</label>
    <select multiple class="form-control" id="staff-option">
    <option value="">Select a Desert</option>`;
  
    getStaff(obj.firebaseKey).then((staffArray) => {
      staffArray.forEach((item) => {
        domstring += `<option value="${item.firebaseKey}">${item.name}</option>`;
      });
  
      domString += `<option value="${item.firebaseKey}">${item.name}</option>`;
  
      document.querySelector('#select-staff').innerHTML = domString;
  
    });
}

export { selectMainCourseOne, selectMainCourseTwo, selectDesert, selectStaff };
