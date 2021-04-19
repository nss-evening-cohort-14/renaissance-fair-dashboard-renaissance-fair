import { foodTitle } from './headerTitle';

const showFood = (array) => {
  foodTitle();
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#add-button-container').innerHTML = '<button class="btn add-new-form-btn" id="create-food-form">Add Food<span class="button-icon"><i class="fas fa-user-friends"></i></span></button>';
  array.forEach((food) => {
    const domString = `<div class="food-card item card border-0 bg-transparent" style="width: 18rem;">
    <img src="${food.image}" class="card-img-top top" alt="...">
    <div class="card-body middle">
      <h5 class="card-title" id="food-card-title--${food.firebaseKey}">${food.name}</h5>
      <p class="card-text">${food.description}</p>
      <p class="card-text">Price: ${food.price}</p>
      <button type="button" class="btn edit-btn" id="food-edit-btn--${food.firebaseKey}" data-toggle="modal" data-target="#formModal"><i id="food-edit-btn--${food.firebaseKey}" class="fas fa-edit fa-lg"></i></button>
      <button class="btn delete-btn" data-toggle="modal" data-target="#formModal" id="delete-modal-food--${food.firebaseKey}"><i class="fas fa-trash-alt" id="delete-modal-food--${food.firebaseKey}"></i></button>
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

export default showFood;
