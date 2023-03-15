const formEvents = () => {
  document.querySelector('#form-pages').addEventListener('submit', (e) => {
    e.preventDefault();
  });
};

export default formEvents;
