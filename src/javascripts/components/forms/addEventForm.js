import { selectMainCourseOne, selectMainCourseTwo, selectDesert } from '../forms/selectItems';

const addEventForm = () => {
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = `<form>
<div class="form-group">
    <label for="eventTitle">Title</label>
    <input type="text" class="form-control" id="event-title" aria-describedby="eventTitle">
  </div>
  <div class="form-group">
    <label for="eventDate">Date</label>
    <input type="date" class="form-control" id="event-date">
  </div>
  <div class="form-group">
    <label for="eventImage">Image</label>
    <input type="url" class="form-control" id="event-image">
  </div>
  <div class="form-group" id="select-main-course-choice-1">
  </div>
  <div class="form-group" id="select-main-course-choice-2">
  </div>
  <div class="form-group" id="select-desert-choice">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`

  selectMainCourseOne();
  selectMainCourseTwo();
  selectDesert();
};

export default addEventForm;
