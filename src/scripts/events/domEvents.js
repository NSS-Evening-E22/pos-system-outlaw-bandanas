import renderCreateItemPage from '../pages/createItemPage';
import { createOrderPage } from '../pages/viewOrdersPage';
import renderRevenuePage from '../pages/revenuePage';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('view-orders')) {
      createOrderPage();
    }

    if (e.target.id.includes('create-order')) {
      renderCreateItemPage();
    }

    if (e.target.id.includes('view-revenue')) {
      renderRevenuePage();
    }
  });
};

export default domEvents;
