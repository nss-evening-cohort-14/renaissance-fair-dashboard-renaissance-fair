const footerBuilder = () => {
  document.querySelector('#footer').innerHTML = `
  <footer class="navbar navbar-expand-lg footer">
  <div class="container-fluid d-flex justify-content-between">
    <div class="collapse navbar-collapse" id="footer">
      <ul class="navbar-nav d-flex justify-content-around w-100">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" id="copyright"
            >© 2021 Freelancer, LLC.</a
          >
        </li>
        <div class="middle-footer-button-container d-flex">
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="https://twitter.com/?lang=en"><i class="fab fa-twitter"></i></a>
          </li>
        </div>
        <div class="right-footer-button-container d-flex">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Policy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Legal</a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</footer>`;
};

export default footerBuilder;
