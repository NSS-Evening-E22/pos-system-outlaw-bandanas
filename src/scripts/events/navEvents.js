import createOrderPage from '../pages/createOrderPage';

const navEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    console.warn(e.target);
    if (e.target.id.includes('create-orders')) {
      createOrderPage();
    }
  });
};

export default navEvents;
