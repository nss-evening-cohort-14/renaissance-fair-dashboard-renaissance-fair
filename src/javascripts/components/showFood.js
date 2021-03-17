import headerTitle from './headerTitle';

const showFood = (array) => {
  headerTitle('Food Shoppes');
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '<div class="create-food-btn" id="createFoodButton"><button type="button" class="btn btn-primary" id="create-food">Primary</button></div>';
  array.forEach((food) => {
    const domString = `<div class="card food-card" style="width: 18rem;">
    <img src="${food.image}" class="card-img-top top" alt="...">
    <div class="card-body middle">
      <h5 class="card-title" id="food-card-title--${food.firebaseKey}">${food.name}</h5>
      <p class="card-text">${food.description}</p>
      <p class="card-text">Price: ${food.price}</p>
      <a href="#" class="btn btn-danger food-delete-btn--${food.firebaseKey}">Delete</a>
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
