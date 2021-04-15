const editShowForm = (showObject) => {
  document.querySelector('#edit-modal-body').innerHTML = `
  <form id="edit-show-form" class="mb-4">
<div class="form-group">
  <label for="name">Show Name</label>
  <input type="text" class="form-control" id="showName" aria-describedby="showName" value="${showObject.name}" required>
</div>
<div class="form-group">
  <label for="image">Image URL</label>
  <input type="url" class="form-control" id="image" value="${showObject.image}" required>
</div>
<div class="form group">
  <label for="description">Description</label>
  <input type="text" class="form-control" id="description" aria-describedby="showDescription" value ="${showObject.description}" required>
</div>
<div class="form group">
  <label for="date">Date</label>
  <input type="date" class="form-control" id="date" aria-describedby="showDate" value="${showObject.date}" required>
</div>
<div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" id="price" min="1" max="500" value="${showObject.show_price}">
    </div>
<button type="button" id="update-show--${showObject.firebaseKey}" class="btn btn-danger">Update Show</button>
</div>`;
};

export default editShowForm;
