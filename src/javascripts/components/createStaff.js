const createStaff = () => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = `<form>
  <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" class="form-control" id="staffFirstName" placeholder="Enter First Name">
    <label for="lastName">Last Name</label>
    <input type="text" class="form-control" id="staffLastName" placeholder="Enter Last Name">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
};

export default createStaff;
