import { souvenirTitle } from '../headerTitle';

const newSouvenirsForm = () => {
  document.querySelector('#add-button-container').innerHTML = '';
  document.querySelector('#content-container').innerHTML = '';
  souvenirTitle();
  document.querySelector('#content-container').innerHTML = `
    <form id='submit-souvenirs-form' class='mb-4' style='width:25%;'>
      <div class='form-group'>
        <label for='title'>Souvenir Name</label>
        <input type='text' class='form-control' id='title' aria-describedby='souvenirTitle' placeholder='Enter Souvenir Title' required>
      </div>
      <div class='form-group'>
        <label for='image'>Image URL</label>
        <input type='url' class='form-control' id='image' placeholder='Image URL' required>
      </div>
      <div class='form-group'>
        <label for='price'>Price</label>
        <input type='number' class='form-control' id='price' placeholder='Price' required>
      </div>
      <div class='form-group'>
      <label for='description'>Souvenir Description</label>
      <textarea class='form-control' id='description' rows='3' aria-describedby='souvenirDescription' placeholder='Enter Souvenir Description' required></textarea>
      </div>
      <button type='submit' id='submit-souvenirs' class='btn btn-primary'>Submit</button>
    </form>`;
};

export default newSouvenirsForm;
