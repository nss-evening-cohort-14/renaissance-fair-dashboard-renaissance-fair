const deleteConfirm = (showsObject) => {
  document.querySelector('#edit-modal-body').innerHTML = `
  <h2>Are you sure you want to delete?</h2>
  <button class="btn btn-danger" id="delete-show--${showsObject.firebaseKey}">Delete</button>`;
};

export default deleteConfirm;
