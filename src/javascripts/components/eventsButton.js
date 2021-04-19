import events from '../../assets/middle-earth-map.jpg';

const eventsButton = () => `<div id="events-container" class="nav-cards">
                        <div class="card shows-button-card button-card" style="width: 18rem;">
                        <img src="${events}" class="image card-img-top rounded mx-auto d-block top" style="width:100%;">
                        <div class="card-body middle module-btn" id="events-view">
                          <h3 class="card-title">Events!</h3>
                        </div>
                      </div>
                    </div>`;

export default eventsButton;
