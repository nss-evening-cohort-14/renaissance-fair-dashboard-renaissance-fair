const waresButton = () => {
  document.querySelector('#content-container').innerHTML = '';
  const domString = `<div id="souvenir-container">
                        <div class="card wares-button-card" style="width: 18rem;">
                          <img src="..." class="card-img-top top" alt="...">
                        <div class="card-body middle">
                          <h5 class="card-title">Wares</h5>
                          <p class="card-text">Something about gold and jewels and dwarves</p>
                          <a href="#" class="btn btn-primary" id="souvenir-view">Wares</a>
                        </div>
                      </div>
                    </div>`;
  document.querySelector('#content-container').innerHTML += domString;
};

export default waresButton;
