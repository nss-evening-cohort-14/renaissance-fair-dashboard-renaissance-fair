import headerTitle from '../headerTitle';

const createStaff = () => {
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '';
  headerTitle('Add Staff');
  document.querySelector('#content-container').innerHTML = `<form>
  <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" class="form-control" id="staffFirstName" placeholder="Enter First Name">
  </div>
  <div class="form-group">
    <label for="lastName">Last Name</label>
    <input type="text" class="form-control" id="staffLastName" placeholder="Enter Last Name">
  </div>
  <div class="form-group">
    <label for="staffImage">Staff Image</label>
    <input type="url" class="form-control" id="staffImage" placeholder="Insert image URL">
  </div>
  <div class="form-group">
    <label for="staffRole">Staff Role</label>
    <input type="text" class="form-control" id="staffRole" placeholder="Staff Role">
  </div>
  <button type="submit" id="submitNewStaff" class="btn btn-primary">Submit</button>
</form>`;
};

export default createStaff;
