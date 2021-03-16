const buildSouvenirs = (array) => {
  document.querySelector('#content-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `<div class="item">
    <div class="souvenir-container top m-3" style="width: 20rem">
      <img src='${item.souvenir_image}' class="card-img-top rounded mx-auto d-block" id='card-img'></img>
      <div class="middle">
        <a href="#" id="title-link"><h5 id="souvenir-title--${item.firebaseKey}" class="card-title mt-5 text-center">${item.name}</h5></a>
        <div class="text-center">
        <p class="card-text bold price">${item.souvenir_price}</p>
        <hr>
        <p class="card-text description">${item.souvenir_description}</p>
        <button class="btn btn-danger btn-lg" id="edit-souvenir--${item.firebaseKey}">Edit</button>
        <button class="btn btn-danger btn-lg" id="delete-souvenir--${item.firebaseKey}">Delete</button>
        <br>
    </div>
  </div>
</div>
</div>`;
  });
};

export default buildSouvenirs;
