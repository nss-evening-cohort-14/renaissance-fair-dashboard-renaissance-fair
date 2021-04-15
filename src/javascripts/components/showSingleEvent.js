const showSingleEvent = () => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#header-title-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '<div class="event-quadrant">Food</div><div class="event-quadrant">Staff</div><div class="event-quadrant">Shows</div><div class="event-quadrant">Souvenirs</div>';
  // array.forEach((item) => {
  //   document.querySelector('#content-container').innerHTML += `
  //   `;
  // });
};

export default showSingleEvent;
