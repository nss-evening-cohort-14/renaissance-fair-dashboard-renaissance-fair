import headerTitle from './headerTitle';

const showEvents = (array) => {
  headerTitle('EVENTS');
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '<button class="btn add-new-event-btn" id="add-new-event-btn">Add Event<span class="button-icon"><i class="fas fa-user-friends"></i></span></button>';
  array.forEach((item) => {
    document.querySelector(
      '#content-container'
    ).innerHTML += `<div class="item card border-0 bg-transparent">
    <div class="events-container m-3" style="width: 20rem;">
      <img src='${item.image}' class="card-img-top rounded mx-auto d-block image top" id='card-img'></img>
      <div class="middle">
        <a href="#" id="show-event-title"><h5 id="event-title--${item.firebaseKey}" class="card-title mt-5 text-center">${item.title}</h5></a>
        <div class="text-center">
        <p class="card-text description scroller" id="show-event-date">${item.date}</p>
        <button class="btn delete-btn" data-toggle="modal" data-target="#formModal" id="delete-modal-event--${item.firebaseKey}"><i class="fas fa-trash-alt" id="delete-modal-event--${item.firebaseKey}"></i></button>
        <br>
    </div>
  </div>
</div>
</div>`;
  });
};

const emptyEvents = () => {
  headerTitle('EVENTS');
  document.querySelector('#content-container').innerHTML = '<h1>No Events</h1>';
};

export { showEvents, emptyEvents };
