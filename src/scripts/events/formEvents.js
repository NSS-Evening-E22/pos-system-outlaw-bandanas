import { createOrder, updateOrder } from '../../api/orderData';
import { createItem, updateItem, getItemsByOrderId } from '../../api/itemData';
import { renderOrderDetailsPage } from '../pages/orderDetailsPage';
import renderHomePage from '../pages/homePage';

const formEvents = (user) => {
  document.querySelector('#form-pages').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const payload = {
        orderName: document.querySelector('#order-name').value,
        phoneNum: document.querySelector('#phone-number').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#order-type').value,
        status: 'open',
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload);
      });
    }

    if (e.target.id.includes('create-item-form')) {
      const payload = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: Number(document.querySelector('#item-price').value),
        orderId: document.querySelector('#firebaseKey').value,
      };
      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItem(patchPayload);
      }).then(() => {
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
        .then(() => {
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
