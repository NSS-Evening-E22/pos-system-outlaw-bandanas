import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const createOrderPage = () => {
  clearDom();
  // <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
  const domString = `
  <div class="form-group">
    <label for="image">Order Name</label>
    <input type="text" class="form-control" id="order_name" placeholder="Order Name" required>
  </div>
  <div class="form-group">
    <label for="image">Customer Phone</label>
    <input type="text" class="form-control" id="phone_number" placeholder="Enter phone number" required>
  </div>
  <div class="form-group">
    <label for="title">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" required>
  </div>
  <div class="form-group">
    <label for="image">Order Type</label>
    <input type="text" class="form-control" id="order_type" placeholder="Order Type" required>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Create/Edit Order</button>
</form>`;

  renderToDOM(domString, '#form-pages');
};

export default createOrderPage;
