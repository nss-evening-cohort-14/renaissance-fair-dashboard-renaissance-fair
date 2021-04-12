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
