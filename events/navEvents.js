const navEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    console.warn(e.target);
  });
};

export default navEvents;
