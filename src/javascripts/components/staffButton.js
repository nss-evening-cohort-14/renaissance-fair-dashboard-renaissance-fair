import staff from '../../assets/eowyn.jpg';

const staffButton = () => `
<div id="staff-container" class="nav-cards bg-transparent">
  <div class="card staff-button-card button-card" style="width: 18rem;">
  <img src="${staff}" class="image card-img-top rounded mx-auto d-block top" style="width:100%;" id="eowyn">
    <div class="card-body middle module-btn" id="staff-view">
      <h3 class="card-title">Staff!</h3>
    </div>
  </div>
</div>`;

export default staffButton;
