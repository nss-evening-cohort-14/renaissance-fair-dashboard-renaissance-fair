const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
  });
};

export default domEvents;
