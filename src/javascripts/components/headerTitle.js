import animate from '../../assets/resized-animate.mp4';

const headerTitle = () => {
  const domString = `<div class="jumbotron text-center">
  <div id="animate-container">
    <video width="1000" height="400" autoplay muted>
    <source src="${animate}" type="video/mp4">
    </video>
  </div>
</div>`;
  document.querySelector('#header-container').innerHTML = domString;
};

export default headerTitle;
