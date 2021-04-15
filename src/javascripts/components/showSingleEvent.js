const showSingleEvent = () => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML += '<div class="event-quadrant">Food</div><div class="event-quadrant">Staff</div><div class="event-quadrant">Shows</div><div class="event-quadrant">Souvenirs</div>';
};

export default showSingleEvent;
