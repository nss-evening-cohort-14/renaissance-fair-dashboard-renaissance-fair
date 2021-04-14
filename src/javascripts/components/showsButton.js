import show from '../../assets/book-cover.jpg';

const showsButton = () => `<div id="shows-container" class="nav-cards">
                        <div class="card shows-button-card button-card" style="width: 18rem;">
                        <img src="${show}" class="image card-img-top rounded mx-auto d-block top" style="width:100%;">
                        <div class="card-body middle module-btn" id="shows-view">
                          <h5 class="card-title">Shows!</h5>
                        </div>
                      </div>
                    </div>`;

export default showsButton;
