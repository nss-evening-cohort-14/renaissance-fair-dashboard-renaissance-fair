const footerBuilder = () => {
  document.querySelector('#footer').innerHTML = `
  <footer class="navbar navbar-expand-lg footer">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#"
            >© 2021 Freelancer, LLC.</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="https://twitter.com/?lang=en"><i class="fab fa-twitter"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Policy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Legal</a>
        </li>
      </ul>
    </div>
  </div>
</footer>`;
};

export default footerBuilder;
