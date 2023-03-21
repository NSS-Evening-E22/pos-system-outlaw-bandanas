import { getOpenOrders } from '../../api/orderData';
import { showOrders, createOrderPage } from '../pages/viewOrdersPage';
import renderHomePage from '../pages/homePage';
import createOrder from '../pages/createOrderPage';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id.includes('go-home')) {
      renderHomePage(user);
    }
    // VIEW ORDERS
    if (e.target.id.includes('nav-view-orders')) {
      createOrderPage();
      getOpenOrders().then(showOrders);
    }
    // CREATE ORDERS
    if (e.target.id.includes('create-orders')) {
      createOrder();
    }
    // HOME
    if (e.target.id.includes('go-home')) {
      renderHomePage(user);
    }
  });
};

export default navEvents;
