import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const createOrder = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
  <div class="form-group">
    <label for="image">Order Name</label>
    <input type="text" class="form-control" id="order-name" placeholder="Order Name" value="${obj.orderName || ''}" required>
  </div>
  <div class="form-group">
    <label for="image">Customer Phone</label>
    <input type="text" class="form-control" id="phone-number" placeholder="Enter phone number" value="${obj.phoneNum || ''}" required>
  </div>
  <div class="form-group">
    <label for="title">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email || ''}" required>
  </div>
  <div class="form-group">
    <label for="image">Order Type</label>
    <select class="form-control" id="order-type" required>
      <option value="${obj.orderType || ''}">${obj.orderType || 'Select an option'}</option>
      <option value="Phone">Phone</option>
      <option value="Walk In">Walk In</option>
    </select>
  </div>
  <button type="submit" id="add-order-btn" class="btn btn-create mt-3">Create/Edit Order</button>
</form>`;
  renderToDom(domString, '#form-pages');
};

export default createOrder;
