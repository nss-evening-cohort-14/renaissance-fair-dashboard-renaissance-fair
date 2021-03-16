const foodButton = () => {
  const domString = `<div id="food-container">
                        <div class="card" style="width: 18rem;">
                          <img src="..." class="card-img-top top" alt="...">
                        <div class="card-body middle">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary" id="food-view">Food View</a>
                        </div>
                      </div>
                    </div>`;
  document.querySelector('#content-container').innerHTML += domString;
};

export default foodButton;
