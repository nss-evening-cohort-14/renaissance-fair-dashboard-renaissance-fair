import { staffTitle } from '../headerTitle';

const showStaffReadOnly = (array) => {
  staffTitle();
  document.querySelector('#content-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `
    <div id="staffContainer" class="item card border-0 bg-transparent" style="width: 20rem;">
      <img class="card-img-top top pinImg" src="${item.staff_image}" alt="${item.first_name}">
      <div class="card-body staffInfo middle">
        <h5 class="card-title text-dark">${item.first_name}</h5>
        <p class="staffDescription">${item.role}</p>
      </div>
    </div>`;
  });
};

const emptyStaff = () => {
  staffTitle();
  document.querySelector('#content-container').innerHTML = '<h1>No Staff</h1>';
};

export { showStaffReadOnly, emptyStaff };
