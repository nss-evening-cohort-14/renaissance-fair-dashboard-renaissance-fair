const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="nav"></div>
                                              <div id="header-container" class="header-container"></div>
                                              <div id="content-container" class="content-container"></div>
                                              <div id="edit-form-container"></div>
                                              <div id="footer"></div>`;
};

export default domBuilder;
