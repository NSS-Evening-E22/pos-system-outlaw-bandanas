import { getOrders, createOrder, updateOrder } from '../../api/orderData';
import { createItem, updateItem, getItemsByOrderId } from '../../api/itemData';
import renderOrderDetailsPage from '../pages/orderDetailsPage';
import { createOrderPage, showOrders, showClosedOrders } from '../pages/viewOrdersPage';
import renderHomePage from '../pages/homePage';

const formEvents = (user) => {
  document.querySelector('#form-pages').addEventListener('submit', (e) => {
    e.preventDefault();
    //  EVENT HANDLER SUBMIT ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        orderName: document.querySelector('#order-name').value,
        phoneNum: document.querySelector('#phone-number').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#order-type').value,
        status: 'open',
      };
      createOrder(payload)
        .then(({ name }) => {
          const patchPayload = { firebaseKey: name };
          console.warn('patchPayload:', patchPayload);
          updateOrder(patchPayload);
        })
        .then(() => {
          setTimeout(() => {
            createOrderPage();
            getOrders().then((data) => {
              const openOrders = data.filter((item) => item.status === 'open');
              console.warn('openOrders:', openOrders);
              showOrders(openOrders);
              const closedOrders = data.filter(
                (item) => item.status === 'closed'
              );
              showClosedOrders(closedOrders);
            });
          }, 1000);
        });
    }
    // UPDATE ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        orderName: document.querySelector('#order-name').value,
        phoneNum: document.querySelector('#phone-number').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#order-type').value,
        status: 'open',
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        createOrderPage();
        getOrders().then((data) => {
          const openOrders = data.filter((item) => item.status === 'open');
          showOrders(openOrders);
          const closedOrders = data.filter((item) => item.status === 'closed');
          showClosedOrders(closedOrders);
        });
      });
    }

    // EVENT HANDLER FOR CREATE ITEM
    if (e.target.id.includes('create-item-form')) {
      const payload = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: Number(document.querySelector('#item-price').value),
        orderId: document.querySelector('#firebaseKey').value,
      };
      createItem(payload)
        .then(({ name }) => {
          const patchPayload = { firebaseKey: name };
          updateItem(patchPayload);
        })
        .then(() => {
          const orderId = document.querySelector('#firebaseKey').value;
          getItemsByOrderId(orderId).then((data) => {
            renderOrderDetailsPage(data, orderId);
          });
        });
    }

    // EDIT ITEM
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: Number(document.querySelector('#item-price').value),
        firebaseKey,
      };
      updateItem(payload)
        .then(() => {
          const orderId = document.querySelector('#firebaseKey').value;
          getItemsByOrderId(orderId).then((data) => {
            renderOrderDetailsPage(data, orderId);
          });
        });
    }

    // CLOSE ORDER
    if (e.target.id.includes('close-order-form')) {
      const payload = {
        paymentType: document.querySelector('#payment-type').value,
        tip: Number(document.querySelector('#tip').value),
        status: 'closed',
        firebaseKey: document.querySelector('#orderId').value,
      };
      updateOrder(payload)
        .then(() => {
          renderHomePage(user);
        });
    }
  });
};

export default formEvents;
