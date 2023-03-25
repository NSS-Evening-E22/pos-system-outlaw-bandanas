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

const searchEvents = () => {
  document.querySelector('#navBar').addEventListener('keyup', (e) => {
    if (e.target.id.includes('order-search')) {
      getOrders().then((data) => {
        const search = e.target.value.toLowerCase();
        const results = data.filter((el) => el.orderName.toLowerCase().includes(search) || el.phoneNum.split('-').join('').includes(search) || el.phoneNum.includes(search));
        const openRes = results.filter((item) => item.status === 'open');
        showOrders(openRes);
        const closedRes = results.filter((item) => item.status === 'closed');
        showClosedOrders(closedRes);
      });
    }
  });
};

export {
  navEvents,
  searchEvents,
};
