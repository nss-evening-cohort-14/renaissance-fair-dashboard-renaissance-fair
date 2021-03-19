const buildNav = () => {
  document.querySelector('#nav').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="home">Freelancer</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavigation" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse sidenav" id="navbarNavigation">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" id="shows-link" aria-current="page" href="#">Shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="souvenirs-link" href="#">Souvenirs</a>
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
