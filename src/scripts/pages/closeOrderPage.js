import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const renderCloseOrderPage = (orderId) => {
  clearDom();
  const domString = `
  
  <form id="close-order-form" class="mb-4">
  <div class="form-group">
    <label for="payment-type">Payment Type</label>
    <input type="text" class="form-control" id="payment-type" placeholder="Payment Type (cash, credit, mobile)" required>
  </div>
  <div class="form-group">
    <label for="tip">Tip Amount</label>
    <input type="text" class="form-control" id="tip" placeholder="Tip" required>
    <input type="hidden" id="orderId" value="${orderId}">
  </div>
  <button type="submit" class="btn btn-payment mt-3">Close Order</button>
</form>`;

  renderToDOM(domString, '#form-pages');
};

export default renderCloseOrderPage;
