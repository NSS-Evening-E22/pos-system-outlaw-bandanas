import { createOrderPage, showOrders, showClosedOrders } from '../pages/viewOrdersPage';
import renderRevenuePage from '../pages/revenuePage';
import {
  deleteOrder, getOrders, getSingleOrder, getClosedOrders
} from '../../api/orderData';
import createOrder from '../pages/createOrderPage';
import renderCreateItemPage from '../pages/createItemPage';
import renderCloseOrderPage from '../pages/closeOrderPage';
import renderOrderDetailsPage from '../pages/orderDetailsPage';
import { getItemsByOrderId, deleteItem, getSingleItem } from '../../api/itemData';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    // EVENT HANDLER FOR VIEW ORDERS BUTTON
    if (e.target.id.includes('view-orders')) {
      createOrderPage();
      getOrders().then((data) => {
        const openOrders = data.filter((item) => item.status === 'open');
        showOrders(openOrders);
        const closedOrders = data.filter((item) => item.status === 'closed');
        showClosedOrders(closedOrders);
      });
    }
    // EVENT HANDLER FOR CREATE ORDERS BUTTON
    if (e.target.id.includes('create-orders')) {
      createOrder();
    }
    // EVENT HANDLER FOR VIEW REVENUE BUTTON
    if (e.target.id.includes('view-revenue')) {
      renderRevenuePage();

      getClosedOrders().then((orders) => {
        let totalTip = 0;
        let itemTotal = 0;
        let callInTotal = 0;
        let walkInTotal = 0;
        let cashPaymentNum = 0;
        let cardPaymentNum = 0;
        orders.forEach((order) => {
          totalTip += order.tip;
          if (order.orderType === 'Phone') {
            callInTotal += 1;
          }
          if (order.orderType === 'Walk In') {
            walkInTotal += 1;
          }
          if (order.paymentType === 'Credit') {
            cardPaymentNum += 1;
          }
          if (order.paymentType === 'Cash') {
            cashPaymentNum += 1;
          }

          document.querySelector('#total-call-in').innerHTML = `Total Call Ins: ${callInTotal}`;
          document.querySelector('#total-walk-in').innerHTML = `Total Walk Ins: ${walkInTotal}`;
          document.querySelector('#total-card-payments').innerHTML = `Total Card Payments: ${cardPaymentNum}`;
          document.querySelector('#total-cash-payments').innerHTML = `Total Cash Payments: ${cashPaymentNum}`;

          getItemsByOrderId(order.firebaseKey).then((items) => {
            items.forEach((item) => {
              itemTotal += item.itemPrice;
            });
            document.querySelector('#total-revenue').innerHTML = `Total Revenue: ${itemTotal}`;
          });
        });
        document.querySelector('#total-tips').innerHTML = `Total Tips: ${totalTip}`;
      });
    }

    // EVENT HANDLER FOR DELETE ORDER BUTTON
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          getOrders().then((data) => {
            const openOrders = data.filter((item) => item.status === 'open');
            showOrders(openOrders);
            const closedOrders = data.filter(
              (item) => item.status === 'closed'
            );
            showClosedOrders(closedOrders);
          });
        });
      }
    }

    if (e.target.id.includes('goToPaymentButton')) {
      renderCloseOrderPage();
    }
    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => createOrder(orderObj));
    }

    // EVENT HANDLER FOR GO TO PAYMENT BUTTON
    if (e.target.id.includes('goToPaymentButton')) {
      const [, orderId] = e.target.id.split('--');
      renderCloseOrderPage(orderId);
    }

    // EVENT HANDLER FOR ORDER DETAILS BUTTON
    if (e.target.id.includes('order-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getItemsByOrderId(firebaseKey).then((data) => {
        renderOrderDetailsPage(data, firebaseKey);
      });
    }
    // EVENT HANDLER FOR ADD ITEM BUTTON
    if (e.target.id.includes('addItemButton')) {
      const [, orderId] = e.target.id.split('--');
      renderCreateItemPage(orderId);
    }
    // EVENT HANDLER FOR EDIT ITEM BUTTON
    if (e.target.id.includes('edit-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((data) => {
        renderCreateItemPage(data.orderId, data);
      });
    }
    // EVENT HANDLER FOR DELETE ITEM BUTTON
    if (e.target.id.includes('delete-item-btn')) {
      const [, firebaseKey, orderId] = e.target.id.split('--');
      deleteItem(firebaseKey).then(() => {
        getItemsByOrderId(orderId).then((data) => {
          renderOrderDetailsPage(data, orderId);
        });
      });
    }
  });
};

export default domEvents;
