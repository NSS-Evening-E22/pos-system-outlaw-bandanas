import { createOrderPage, showOrders } from '../pages/viewOrdersPage';
import renderRevenuePage from '../pages/revenuePage';
import { getOrders } from '../../api/orderData';
import createOrder from '../pages/createOrderPage';
import renderCreateItemPage from '../pages/createItemPage';
import renderCloseOrderPage from '../pages/closeOrderPage';
import { getItems } from '../../api/itemData';
import renderOrderDetailsPage from '../pages/orderDetailsPage';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders')) {
      createOrderPage();
      getOrders().then(showOrders);
    }

    if (e.target.id.includes('create-orders')) {
      createOrder();
    }

    if (e.target.id.includes('view-revenue')) {
      renderRevenuePage();
    }

    if (e.target.id.includes('addItemButton')) {
      renderCreateItemPage();
    }

    if (e.target.id.includes('goToPaymentButton')) {
      renderCloseOrderPage();
    }

    if (e.target.id.includes('order-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getItems().then((data) => {
        renderOrderDetailsPage(data, firebaseKey);
      });
    }
  });
};

export default domEvents;
