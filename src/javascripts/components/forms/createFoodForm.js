import { foodTitle } from '../headerTitle';

const createFoodForm = () => {
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '';
  foodTitle();
  document.querySelector('#content-container').innerHTML = `
  <form class="add-food-form">
    <div class="form-group">
      <label for="foodName">Food name</label>
      <input type="text" class="form-control" id="foodName" aria-describedby="name">
    </div>
    <div class="form-group">
      <label for="foodDescription">Food description</label>
      <textarea type="text" class="form-control" id="foodDescription"></textarea>
    </div>
    <div class="form-group">
      <label for="imageUrl">Enter Image URL</label>
      <input type="url" class="form-control" id="imageUrl">
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" id="price" min="1" max="500">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="glutenFree">
      <label class="form-check-label" for="glutenFree">GF</label>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="vegetarian">
      <label class="form-check-label" for="vegetarian">Veg</label>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-food">Submit</button>
  </form>`;
};

export default createFoodForm;
