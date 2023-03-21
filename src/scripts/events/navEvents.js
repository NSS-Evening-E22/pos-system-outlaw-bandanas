import { getOrders } from '../../api/orderData';
import { showOrders, createOrderPage, showClosedOrders } from '../pages/viewOrdersPage';
import renderHomePage from '../pages/homePage';
import createOrder from '../pages/createOrderPage';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id.includes('go-home')) {
      renderHomePage(user);
    }
    // VIEW ORDERS
    if (e.target.id.includes('nav-viewOrders')) {
      createOrderPage();
      getOrders().then((data) => {
        const openOrders = data.filter((item) => item.status === 'open');
        showOrders(openOrders);
        const closedOrders = data.filter((item) => item.status === 'closed');
        showClosedOrders(closedOrders);
      });
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
