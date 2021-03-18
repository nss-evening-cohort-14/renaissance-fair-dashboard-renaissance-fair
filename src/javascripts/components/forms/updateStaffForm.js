const updateStaffForm = (staffObject) => {
  document.querySelector('#edit-modal-body').innerHTML = `<form id="submit-staff-form" class="mb-4">
  <div class="form-group">
    <label for="staffFirstName">First Name</label>
    <input type="text" class="form-control" id="staffFirstName" aria-describedby="firstName" placeholder="First Name" value="${staffObject.first_name}" required>
  </div>
  <div class="form-group">
    <label for="staffLastName">Last Name</label>
    <input type="text" class="form-control" id="staffLastName" aria-describedby="lastName" placeholder="Last Name" value="${staffObject.last_name}">
  </div>
  <div class="form-group">
    <label for="title">Image URL</label>
    <input type="url" class="form-control" id="staffImage" aria-describedby="imageUrl" value="${staffObject.staff_image}" placeholder="Image URL" required>
  </div>
  <div class="form-group">
    <label for="staffRole">Role</label>
    <input type="text" class="form-control" id="staffRole" aria-describedby="staffRole" placeholder="Role" value="${staffObject.role}" required>
</div>
  <button type="submit" id="update-staff--${staffObject.firebaseKey}" class="btn btn-primary">Update Staff</button>
</form>`;
};

export default updateStaffForm;
