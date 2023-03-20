import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderCreateItemPage = (orderId, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `edit-item--${obj.firebaseKey}` : 'create-item-form'}" class="mb-4">
  <div class="form-group">
    <label for="image">Item Name</label>
    <input type="text" class="form-control" id="item-name" placeholder="Item Name" value="${obj.itemName || ''}" required>
  </div>
  <div class="form-group">
    <label for="image">Item Price</label>
    <input type="text" class="form-control" id="item-price" placeholder="Item Price" value="${obj.itemPrice || ''}" required>
    <input type="hidden" id="firebaseKey" value="${orderId}" >
  </div>
  <button type="submit" class="btn btn-primary mt-3">Add/Edit Item</button>
</form>`;

  renderToDom(domString, '#form-pages');
};

export default renderCreateItemPage;
