import logo from '../../assets/fl.png';

const buildNav = (user) => {
  if (user) {
    document.querySelector('#nav').innerHTML = `
    <nav class="navbar navbar-expand-lg menu">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavigation" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><i class="fas fa-hamburger"></i></span>
      </button>
      <div class="container-fluid">
        <div class="collapse navbar-collapse sidenav" id="navbarNavigation">
          <ul class="navbar-nav text-left">
            <li class="nav-item">
            <img src="${logo}" id="logo">
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="home">FREELANCER</a>
            </li>
              <li class="nav-item">
                <a class="nav-link active" id="events-link" aria-current="page" href="#">EVENTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" id="shows-link" aria-current="page" href="#">SHOWS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="souvenirs-link" href="#">WARES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="court-link" href="#">COURT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="food-link" href="#">FOOD SHOPPES</a>
              </li>
              <li class="nav-item pt-3 ml-2">
              <div id="auth-button"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
  } else {
    document.querySelector('#nav').innerHTML = `
    <nav class="navbar navbar-expand-lg menu">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavigation" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><i class="fas fa-hamburger"></i></span>
      </button>
      <div class="container-fluid">
        <div class="collapse navbar-collapse sidenav" id="navbarNavigation">
          <ul class="navbar-nav text-left">
            <li class="nav-item">
            <img src="${logo}" id="logo">
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="home">FREELANCER</a>
            </li>
              <li class="nav-item">
                <a class="nav-link active" id="shows-link" aria-current="page" href="#">SHOWS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="souvenirs-link" href="#">WARES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="court-link" href="#">COURT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="food-link" href="#">FOOD SHOPPES</a>
              </li>
              <li class="nav-item pt-3 ml-2">
              <div id="auth-button"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
  }
};

export default buildNav;
