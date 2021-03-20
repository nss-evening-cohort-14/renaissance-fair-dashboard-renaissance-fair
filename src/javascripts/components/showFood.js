import headerTitle from './headerTitle';

const showFood = (array) => {
  headerTitle('Food Shoppes');
  $('.create-food-btn').empty();
  document.querySelector('#content-container').innerHTML = '';
  $('<div class="create-food-btn" id="createFoodButton"><button type="button" class="btn btn-primary" id="create-food">Add Food</button></div>').insertAfter(('.header-container'));
  array.forEach((food) => {
    const domString = `<div class="food-card item card border-0 bg-transparent" style="width: 18rem;">
    <img src="${food.image}" class="card-img-top top" alt="...">
    <div class="card-body middle">
      <h5 class="card-title" id="food-card-title--${food.firebaseKey}">${food.name}</h5>
      <p class="card-text">${food.description}</p>
      <p class="card-text">Price: ${food.price}</p>
      <button type="button" class="btn btn-danger" id="food-edit-btn--${food.firebaseKey}" data-toggle="modal" data-target="#formModal">Edit</button>
      <button class="btn btn-danger" data-toggle="modal" data-target="#formModal" id="delete-modal-food--${food.firebaseKey}">Delete</button>
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
