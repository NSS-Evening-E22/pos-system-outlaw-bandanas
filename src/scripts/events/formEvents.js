import { createOrder, updateOrder } from '../../api/orderData';
import { createItem, updateItem, getItemsByOrderId } from '../../api/itemData';
import renderOrderDetailsPage from '../pages/orderDetailsPage';

const formEvents = () => {
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
  });
};

export default formEvents;
