import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const renderCloseOrderPage = () => {
  clearDom();
  const domString = `
  <form id="close-order-form" class="mb-4">
  <div class="form-group">
    <label for="image">Payment Type</label>
    <input type="text" class="form-control" id="payment-type" placeholder="Payment Type (cash, credit, mobile)" required>
  </div>
  <div class="form-group">
    <label for="image">Tip Amount</label>
    <input type="text" class="form-control" id="tip" placeholder="Tip" required>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Close Order</button>
</form>`;

  renderToDOM(domString, '#form-pages');
};

export default renderCloseOrderPage;
