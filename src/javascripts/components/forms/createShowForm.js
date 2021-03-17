const createShowForm = () => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = `<form id="submit-show-form" class="mb-4" style="width: 50rem; margin: 0 auto;">
<div class="form-group">
  <label for="name">Show Name</label>
  <input type="text" class="form-control" id="name" aria-describedby="showName" placeholder="Enter Show Name" required>
</div>
<div class="form-group">
  <label for="image">Image URL</label>
  <input type="url" class="form-control" id="image" placeholder="Image URL" required>
</div>
<div class="form group">
  <label for="description">Description</label>
  <input type="text" class="form-control" id="description" aria-describedby="showDescription" placeholder="Description" required>
</div>
<div class="form group">
  <label for="date">Date</label>
  <input type="date" class="form-control" id="date" aria-describedby="showDate" placeholder="mm/dd/yyyy" required>
</div>
  <button type="button" id="submit-show" class="btn btn-danger">Submit show</button>
</div>`;
};

export default createShowForm;
