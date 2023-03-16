import { createOrder, updateOrder } from '../../api/orderData';

const formEvents = (user) => {
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
        uid: user.uid,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload);
      });
    }
  });
};

export default formEvents;
