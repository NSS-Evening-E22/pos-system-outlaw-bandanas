import createOrderPage from '../pages/createOrderPage';
import renderHomePage from '../pages/homePage';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('create-orders')) {
      createOrderPage();
    }
    if (e.target.id.includes('go-home')) {
      renderHomePage(user);
    }
  });
};

export default navEvents;
