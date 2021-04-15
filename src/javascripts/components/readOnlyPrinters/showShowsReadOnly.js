import { entertainmentTitle } from '../headerTitle';

const printShowsReadOnly = (array) => {
  entertainmentTitle();
  document.querySelector('#content-container').innerHTML = '';
  array.forEach((show) => {
    const domString = `
    <div class="item card border-0 bg-transparent" id="shows-card--${show.firebaseKey}" style="width: 18rem;">
  <img src="${show.image}" class="card-img-top top" alt="show image">
  <div class="card-body-middle middle">
    <h5 class="card-title">${show.name}</h5>
    <h6 id="card-date">${show.date}</h6>
    <p>${show.description}</p>
  </div>
</div>`;
    document.querySelector('#content-container').innerHTML += domString;
  });
};

export default printShowsReadOnly;
