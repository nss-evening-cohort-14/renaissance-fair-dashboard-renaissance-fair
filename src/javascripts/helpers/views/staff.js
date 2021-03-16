const showStaff = (array) => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '<button class="btn btn-primary mb-3" id="add-newPin-btn">Add A New Staff</button>';
  array.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `
    <div id="staffContainer" class="card top" style="width: 20rem;">
      <img class="card-img-top pinImg" src="${item.staff_image}" alt="${item.first_name}">
      <div class="card-body staffInfo middle">
        <h5 class="card-title text-dark">${item.first_name}</h5>
        <p class="staffDescription">${item.role}</p>
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-staff-btn--${item.firebaseKey}">Edit</button>
        <button class="btn btn-danger" id="delete-staff--${item.firebaseKey}">Delete <i class="fas fa-trash-alt"></i></button>
      </div>
    </div>`;
  });
};

export default showStaff;
