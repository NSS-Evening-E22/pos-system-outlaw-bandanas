import { createOrder, updateOrder } from '../../api/orderData';

const formEvents = () => {
  document.querySelector('#form-pages').addEventListener('submit', (e) => {
    e.preventDefault();
    console.warn(e.target.id);
    if (e.target.id.includes('submit-order')) {
      console.warn(e.target.id);
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
      updateOrder(payload);
    }
  });
};

export default formEvents;
