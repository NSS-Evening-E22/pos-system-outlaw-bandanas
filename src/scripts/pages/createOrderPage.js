import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const createOrder = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
  <div class="form-group">
    <label for="image">Order Name</label>
    <input type="text" class="form-control" id="order-name" placeholder="Order Name" required>
  </div>
  <div class="form-group">
    <label for="image">Customer Phone</label>
    <input type="text" class="form-control" id="phone-number" placeholder="Enter phone number" required>
  </div>
  <div class="form-group">
    <label for="title">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" required>
  </div>
  <div class="form-group">
    <label for="image">Order Type</label>
    <input type="text" class="form-control" id="order-type" placeholder="Order Type" required>
  </div>
  <button type="submit" id="add-order-btn" class="btn btn-primary mt-3">Create/Edit Order</button>
</form>`;
  renderToDom(domString, '#form-pages');
};

export default createOrder;
