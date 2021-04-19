import { eventTitle } from './headerTitle';

const showEvents = (array) => {
  eventTitle();
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '<button class="btn add-new-form-btn" id="add-new-event-btn">Add Event<span class="button-icon"><i class="fas fa-user-friends"></i></span></button>';
  array.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `
    <div class="item card border-0 bg-transparent" style="width: 18rem;">
      <img src="${item.image}" class="card-img-top top" alt="event image">
      <div class="card-body middle">
        <a href="#" id="show-event-title"><h5 id="event-title--${item.firebaseKey}" class="card-title mt-1 text-center">${item.title}</h5></a>
          <p class="card-text" id="show-event-date">${item.date}</p>
          <button type="button" id="event-details-btn--${item.firebaseKey}" class="btn btn-sm event-details-btn">View details</button>
          <button type="button" class="btn edit-btn" id="event-edit-btn--${item.firebaseKey}"><i id="event-edit-icon--${item.firebaseKey}" class="fas fa-edit fa-lg"></i></button>
          <button class="btn delete-btn" data-toggle="modal" data-target="#formModal" id="delete-modal-event--${item.firebaseKey}"><i class="fas fa-trash-alt" id="delete-modal-event--${item.firebaseKey}"></i></button>
      </div>
    </div>`;
  });
};

const emptyEvents = () => {
  eventTitle();
  document.querySelector('#content-container').innerHTML = '<h1>No Events</h1>';
};

export { showEvents, emptyEvents };
