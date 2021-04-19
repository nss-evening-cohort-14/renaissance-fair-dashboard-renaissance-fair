import {
  selectSouvenirs, selectShow, selectStaff, selectFood
} from './selectItems';

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
  <div class="form-group" id="select-food">
  </div>
  <div class="form-group" id="select-staff">
  </div>
  <div class="form-group" id="select-show">
  </div>
  <div class="form-group" id="select-souvenir">
  </div>
  <button type="submit" class="btn btn-primary" id="submit-event-form">Submit</button>
</form>`;

  selectFood();
  selectSouvenirs();
  selectShow();
  selectStaff();
};

export default addEventForm;
