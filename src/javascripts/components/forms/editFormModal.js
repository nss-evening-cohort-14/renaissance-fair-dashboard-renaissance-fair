const editFormModal = (modalTitle) => {
  document.querySelector('#edit-form-container').innerHTML = `
  <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="formModalLabel">${modalTitle}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="edit-modal-body">
        </div>
      </div>
    </div>
  </div>`;
};
// CREATED NEW MODAL FOR UPDATE/EDIT FUNCTIONALITY - WON'T WORK WITH OTHER MODAL
export default editFormModal;
