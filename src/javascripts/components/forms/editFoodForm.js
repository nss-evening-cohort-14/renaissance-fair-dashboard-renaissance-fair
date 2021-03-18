const editFoodForm = (foodObject) => {
  document.querySelector('#edit-modal-body').innerHTML = `
  <form class="add-food-form">
    <div class="form-group">
      <label for="foodName">Food name</label>
      <input type="text" class="form-control" id="foodName" aria-describedby="name" value="${foodObject.name}">
    </div>
    <div class="form-group">
      <label for="foodDescription">Food description</label>
      <textarea type="text" class="form-control" id="foodDescription">${foodObject.description}</textarea>
    </div>
    <div class="form-group">
      <label for="imageUrl">Enter Image URL</label>
      <input type="url" class="form-control" id="imageUrl" value="${foodObject.image}">
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" id="price" min="1" max="500" value="${foodObject.price}">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="glutenFree" value=${foodObject.glutenFree}>
      <label class="form-check-label" for="glutenFree">GF</label>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="vegetarian" checked="true">
      <label class="form-check-label" for="vegetarian">Veg</label>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-edit-food--${foodObject.firebaseKey}">Submit</button>
  </form>`;
};

export default editFoodForm;
