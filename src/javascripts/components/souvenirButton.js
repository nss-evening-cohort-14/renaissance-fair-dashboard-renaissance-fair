import souvenir from '../../assets/Lord-of-the-rings-merchandise-1.jpg';

const souvenirsButton = () => `<div id="souvenir-container" class="nav-cards">
                        <div class="card wares-button-card button-card" style="width: 18rem;">
                        <img src="${souvenir}" alt"lord of the rings swords" class="image card-img-top rounded mx-auto d-block top" style="width:100%;">
                        <div class="card-body middle" id="souvenirs-link">
                          <a href="#" class="btn" id="souvenir-view"><h5>Souvenirs</h5></a>
                        </div>
                      </div>
                    </div>`;

export default souvenirsButton;
