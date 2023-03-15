const navEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    console.warn(e.target.id);
  });
};

export default navEvents;
