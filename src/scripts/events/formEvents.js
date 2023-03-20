import { getOrders, createOrder, updateOrder } from '../../api/orderData';
import { createItem, updateItem, getItemsByOrderId } from '../../api/itemData';
import renderOrderDetailsPage from '../pages/orderDetailsPage';
import { createOrderPage, showOrders } from '../pages/viewOrdersPage';

const formEvents = () => {
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
          updateOrder(patchPayload);
        })
        .then(() => {
          createOrderPage();
          getOrders().then(showOrders);
        });
    }
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
        getOrders().then(showOrders);
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
          const firebaseKey = document.querySelector('#firebaseKey').value;
          getItemsByOrderId(firebaseKey).then((data) => {
            renderOrderDetailsPage(data, firebaseKey);
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
        .then()
        .then(() => {
          const orderId = document.querySelector('#firebaseKey').value;
          getItemsByOrderId(orderId).then((data) => {
            renderOrderDetailsPage(data, orderId);
          });
        });
    }
  });
};

export default formEvents;
