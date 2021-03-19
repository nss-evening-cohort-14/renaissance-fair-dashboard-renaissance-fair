const headerTitle = (string) => {
  const domString = `<div class="jumbotron text-center">
  <h1 class='head-title'>${string}</h1></div>`;
  document.querySelector('#header-container').innerHTML = domString;
};

export default headerTitle;
