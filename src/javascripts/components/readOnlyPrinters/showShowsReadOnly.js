import headerTitle from '../headerTitle';

const printShowsReadOnly = (array) => {
  headerTitle('Watch a Show');
  document.querySelector('#content-container').innerHTML = '';
  array.forEach((show) => {
    const domString = `
    <div class="card" id="shows-card--${show.firebaseKey}" style="width: 18rem;">
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
