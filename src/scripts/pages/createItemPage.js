import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderCreateItemPage = (orderId) => {
  clearDom();
  const domString = `
  <form id="create-item-form" class="mb-4">
  <div class="form-group">
    <label for="image">Item Name</label>
    <input type="text" class="form-control" id="item-name" placeholder="Item Name" required>
  </div>
  <div class="form-group">
    <label for="image">Item Price</label>
    <input type="text" class="form-control" id="item-price" placeholder="Item Price" required>
    <input type="hidden" id="firebaseKey" value="${orderId}" >
  </div>
  <button type="submit" class="btn btn-primary mt-3">Add/Edit Item</button>
</form>`;

  renderToDom(domString, '#form-pages');
};

export default renderCreateItemPage;
