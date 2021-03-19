const buildNav = () => {
  document.querySelector('#nav').innerHTML = `
  <nav class="navbar navbar-expand-lg menu">
  <div class="container-fluid">
    <div class="collapse navbar-collapse sidenav" id="navbarNavigation">
    <ul class="navbar-nav text-left">
      <li class ="nav-item">
      <img src="src/assets/Freelancer - Logo (2).png" id="logo">
      </li>
      <li class="nav-item">
      <a class="navbar-brand" href="#" id="home">Freelancer</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavigation" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </li>
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
        <li class="nav-item">
        <div id="auth-button"></div>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
};

export default buildNav;
