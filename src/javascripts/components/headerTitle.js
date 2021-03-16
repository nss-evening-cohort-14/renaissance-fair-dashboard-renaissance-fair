const headerTitle = (string) => {
  const domString = `<h1 class='head-title'>${string}</h1>`;
  document.querySelector('#header-container').innerHTML = domString;
};

export default headerTitle;
