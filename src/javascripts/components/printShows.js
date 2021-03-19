import headerTitle from './headerTitle';

const printShows = (array) => {
  headerTitle('Watch a Show');
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '<button type="submit" id="show-show-form" class="btn btn-primary">Add Show</button>';

  array.forEach((show) => {
    const domString = `
    <div class="card" id="shows-card--${show.firebaseKey}" style="width: 18rem;">
  <img src="${show.image}" class="card-img-top top" alt="show image">
  <div class="card-body-middle middle">
    <h5 class="card-title">${show.name}</h5>
    <h6 id="card-date">${show.date}</h6>
    <p>${show.description}</p>
    <button class="btn btn-danger" data-toggle="modal" data-target="#formModal" id="edit-show--${show.firebaseKey}">Edit</button>
    <button class="btn btn-danger" data-toggle="modal" data-target="#formModal" id="delete-modal--${show.firebaseKey}">Delete</button>
  </div>
</div>`;
    document.querySelector('#content-container').innerHTML += domString;
  });
};

export default printShows;
