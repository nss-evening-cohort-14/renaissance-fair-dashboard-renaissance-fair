const buildNav = () => {
  document.querySelector('#nav').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Freelancer</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" id="shows-link" aria-current="page" href="#">Shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="wares-link" href="#">Wares</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="court-link" href="#">Court</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="food-link" href="#">Food Shoppes</a>
        </li>
      </ul>
      <div id="auth-button"></div>
    </div>
  </div>
</nav>`;
};

export default buildNav;
