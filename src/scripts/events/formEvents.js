import { createOrder, updateOrder } from '../../api/orderData';
import { createItem, updateItem } from '../../api/itemData';

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
        itemPrice: document.querySelector('#item-price').value,
        // orderId: `${firebaseKey}`,
      };
      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItem(patchPayload);
      });
    }
  });
};

export default formEvents;
