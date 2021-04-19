import { foodTitle } from '../headerTitle';

const showFoodReadOnly = (array) => {
  foodTitle();
  document.querySelector('#content-container').innerHTML = '';
  array.forEach((food) => {
    const domString = `<div class="food-card item card border-0 bg-transparent" style="width: 18rem;">
    <img src="${food.image}" class="card-img-top top" alt="...">
    <div class="card-body middle">
      <h5 class="card-title" id="food-card-title--${food.firebaseKey}">${food.name}</h5>
      <p class="card-text">${food.description}</p>
      <p class="card-text">Price: ${food.price}</p>
    </div>
  </div>
  `;
    document.querySelector('#content-container').innerHTML += domString;
    if (food.vegetarian) {
      document.querySelector(`#food-card-title--${food.firebaseKey}`).innerHTML += '<span class="badge bg-success">Veg</span>';
    }
    if (food.glutenFree) {
      document.querySelector(`#food-card-title--${food.firebaseKey}`).innerHTML += '<span class="badge bg-warning">GF</span>';
    }
  });
};

export default showFoodReadOnly;
