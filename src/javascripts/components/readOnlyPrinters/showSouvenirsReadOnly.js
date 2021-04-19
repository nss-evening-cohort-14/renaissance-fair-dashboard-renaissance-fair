import { souvenirTitle } from '../headerTitle';

const showSouvenirsReadOnly = (array) => {
  souvenirTitle();
  document.querySelector('#content-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `<div class="item card border-0 bg-transparent">
    <div class="souvenir-container m-3" style="width: 20rem">
      <img src='${item.souvenir_image}' class="card-img-top rounded mx-auto d-block top" id='card-img'></img>
      <div class="middle">
        <a href="#" id="show-title"><h5 id="souvenir-title--${item.firebaseKey}" class="card-title mt-5 text-center">${item.name}</h5></a>
        <div class="text-center">
        <p class="card-text bold price" id="show-price">${item.souvenir_price}</p>
        <hr>
        <p class="card-text description" id="show-description">${item.souvenir_description}</p>
        <br>
    </div>
  </div>
 </div>
</div>`;
  });
};

const emptySouvenirs = () => {
  souvenirTitle();
  document.querySelector('#content-container').innerHTML = '<h1>No souvenirs</h1>';
};

export { showSouvenirsReadOnly, emptySouvenirs };
