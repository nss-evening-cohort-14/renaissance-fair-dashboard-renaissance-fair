const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="nav"></div>;
                                              <div id="header-container"></div>
                                              <div id="content-container"></div>
                                              <div id="footer"></div>`;
};

export default domBuilder;
