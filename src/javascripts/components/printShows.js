const printShows = (array) => {
  document.querySelector('#content-container').innerHTML = '';

  array.forEach((show) => {
    document.querySelector('#content-container').innerHTML += `
    <div class="card" id="shows-card^^${show.firebaseKey}" style="width: 18rem;">
  <img src="${show.image}" class="card-img-top" alt="show image">
  <div class="card-body-middle">
    <h5 class="card-title">${show.name}</h5>
    <h6 id="date">${show.date}</h6>
    <p>${show.description}</p>
    <a href="#" class="btn btn-primary">Delete</a>
  </div>
</div>`;
  });
};

export default printShows;
