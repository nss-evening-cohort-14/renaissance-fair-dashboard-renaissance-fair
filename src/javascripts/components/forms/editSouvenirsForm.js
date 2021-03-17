import headerTitle from '../headerTitle';

const editSouvenirsForm = (souvenirObject) => {
  document.querySelector('#content-container').innerHTML = '';
  headerTitle('Edit Souvenir');
  document.querySelector('#content-container').innerHTML = `
    <form id='submit-souvenirs-form' class='mb-4'>
      <div class='form-group'>
        <label for='title'>Souvenir Name</label>
        <input type='text' class='form-control' id='title' aria-describedby='souvenirTitle' placeholder='Enter Souvenir Title' required value="${souvenirObject.name}">
      </div>
      <div class='form-group'>
        <label for='image'>Image URL</label>
        <input type='url' class='form-control' id='image' placeholder='Image URL' required value="${souvenirObject.souvenir_image}">
      </div>
      <div class='form-group'>
        <label for='price'>Price</label>
        <input type='text' class='form-control' id='price' placeholder='Book Price' required value="${souvenirObject.souvenir_price}">
      </div>
      <div class='form-group'>
      <label for='description'>Souvenir Description</label>
      <input type='text' class='form-control' id='description' aria-describedby='souvenirDescription' placeholder='Enter Souvenir Description' required value="${souvenirObject.souvenir_description}">
      </div>
      <button type='submit' id='update-souvenir--${souvenirObject.firebaseKey}' class='btn btn-primary'>Update</button>
    </form>`;
};

export default editSouvenirsForm;
