// editEventForm.js
import {
  selectSouvenirs, selectShow, selectStaff, selectFood
} from './selectItems';

const editEventForm = (objEvent, objData) => {
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = `<form>
<div class="form-group">
    <label for="eventTitle">Title</label>
    <input type="text" class="form-control" id="event-title" aria-describedby="eventTitle" value="${objEvent.title}">
  </div>
  <div class="form-group">
    <label for="eventDate">Date</label>
    <input type="date" class="form-control" id="event-date" value="${objEvent.date}">
  </div>
  <div class="form-group">
    <label for="eventImage">Image Url</label>
    <input type="url" class="form-control" id="event-image" value="${objEvent.image}">
  </div>
  <div class="form-group" id="select-food">
  </div>
  <div class="form-group" id="select-staff">
  </div>
  <div class="form-group" id="select-show">
  </div>
  <div class="form-group" id="select-souvenir">
  </div>
  <button type="submit" class="btn btn-primary" id="submit-edit-event-form--${objEvent.firebaseKey}">Submit</button>
</form>`;

  selectFood(objData.food);
  selectSouvenirs(objData.souvenirs);
  selectShow(objData.shows);
  selectStaff(objData.staff);
};

export default editEventForm;
