import headerAnimation from '../../assets/resized-animate.mp4';

const animation = `<video width="1000" height="400" autoplay muted>
                    <source src="${headerAnimation}" type="video/mp4">
                 </video>`;
const headerTitle = (title) => {
  const domString = `<div class="jumbotron text-center">
  <div id="animate-container">
  </div>
  <div id="header-title-container">${title}</div>
</div>`;
  document.querySelector('#header-container').innerHTML = domString;
  document.querySelector('#animate-container').innerHTML = animation;
};

export default headerTitle;
