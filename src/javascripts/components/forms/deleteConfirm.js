const deleteConfirm = (obj, module) => {
  document.querySelector('#edit-modal-body').innerHTML = `
  <button class="btn btn-danger" id="delete-${module}--${obj.firebaseKey}">Delete</button>`;
};

export default deleteConfirm;
