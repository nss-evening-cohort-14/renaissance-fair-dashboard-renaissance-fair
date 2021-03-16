const showFood = (array) => {
  document.querySelector('#content-container').innerHTML = '';
  array.forEach((food) => {
    const domString = `<div class="card" style="width: 18rem;">
    <img src="${food.image}" class="card-img-top top" alt="...">
    <div class="card-body middle">
      <h5 class="card-title">${food.name}</h5>
      <p class="card-text">${food.description}</p>
      <p class="card-text">Price: ${food.price}</p>
      <p class="card-text">Veg: ${food.vegetarian}</p>
      <p class="card-text">GF: ${food.glutenFree}</p>
      <a href="#" class="btn btn-danger">Delete</a>
    </div>
  </div>
  `;
    document.querySelector('#content-container').innerHTML += domString;
  });
};

export default showFood;
