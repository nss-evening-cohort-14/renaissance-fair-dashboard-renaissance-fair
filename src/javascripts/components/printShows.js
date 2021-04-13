import headerTitle from './headerTitle';

const printShows = (array) => {
  headerTitle('ENTERTAINMENT');
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '<button class="btn add-new-form-btn" id="show-show-form">Add Shows<span class="button-icon"><i class="fas fa-user-friends"></i></span></button>';

  array.forEach((show) => {
    const domString = `
    <div class="item card border-0 bg-transparent" id="shows-card--${show.firebaseKey}" style="width: 18rem;">
  <img src="${show.image}" class="card-img-top top" alt="show image">
  <div class="card-body-middle middle">
    <h5 class="card-title">${show.name}</h5>
    <h6 id="card-date">${show.date}</h6>
    <p>${show.description}</p>
    <button class="btn edit-btn" data-toggle="modal" data-target="#formModal" id="edit-show--${show.firebaseKey}"><i id="edit-show--${show.firebaseKey}" class="fas fa-edit fa-lg"></i></button>
    <button class="btn delete-btn" data-toggle="modal" data-target="#formModal" id="delete-modal-show--${show.firebaseKey}"><i class="fas fa-trash-alt" id="delete-modal-show--${show.firebaseKey}"></i></button>
  </div>
</div>`;
    document.querySelector('#content-container').innerHTML += domString;
  });
};

export default printShows;
