import getOrders from '../../../.github/orderData';
import { showOrders, createOrderPage } from '../pages/viewOrdersPage';

const navEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id.includes('nav-view-orders')) {
      console.warn('nav view orders clicked');
      createOrderPage();
      getOrders().then(showOrders);
    }

    console.warn(e.target);
  });
};

export default navEvents;
