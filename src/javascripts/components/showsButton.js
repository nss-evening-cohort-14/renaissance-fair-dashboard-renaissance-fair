import show from '../../assets/book-cover.jpg';

const showsButton = () => `<div id="shows-container" class="nav-cards">
                        <div class="card shows-button-card button-card" style="width: 18rem;">
                        <img src="${show}" class="image card-img-top rounded mx-auto d-block top" style="width:100%;">
                        <div class="card-body middle">
                          <h5 class="card-title">Shows</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary" id="shows-view">See Shows</a>
                        </div>
                      </div>
                    </div>`;

export default showsButton;
