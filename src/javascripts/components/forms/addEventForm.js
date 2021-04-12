const addEventForm = () => {
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = <form>
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
  <div class="form-group">
  <label for="mainCourseChoice1">Main Course Choice 1</label>
    <select class="form-control" id="main-course-choice-1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
  </div>
  <div class="form-group">
  <label for="mainCourseChoice2">Main Course Choice 2</label>
    <select class="form-control" id="main-course-choice-2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
  </div>
  <div class="form-group">
  <label for="desertChoice">Desert Choice</label>
    <select class="form-control" id="desert-choice">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
}
