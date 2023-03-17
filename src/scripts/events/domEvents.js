import { createOrderPage, showOrders } from '../pages/viewOrdersPage';
import renderRevenuePage from '../pages/revenuePage';
import { getOrders } from '../../api/orderData';
import createOrder from '../pages/createOrderPage';
import renderCreateItemPage from '../pages/createItemPage';
import renderCloseOrderPage from '../pages/closeOrderPage';
import { getItemsByOrderId } from '../../api/itemData';
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
      getItemsByOrderId(firebaseKey).then((data) => {
        renderOrderDetailsPage(data, firebaseKey);
      });
    }

    if (e.target.id.includes('addItemButton')) {
      const [, firebaseKey] = e.target.id.split('--');
      renderCreateItemPage(firebaseKey);
    }

    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(`Edit Item: ${firebaseKey}`);
    }

    if (e.target.id.includes('delete-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(`ItemFBkey: ${firebaseKey}`);
    }
  });
};

export default domEvents;
