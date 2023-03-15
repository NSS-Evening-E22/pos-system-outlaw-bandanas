import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderOrderDetailsPage = () => {
  clearDom();
  const domString = `
  <h1>Total: $100.00</h1>
    <div id="itemCards"></div>
    <div id="itemDetailsButtons" class="d-flex justify-content-around">
      <button id="addItemButton" class="btn">Add Item</button>
      <button id="goToPaymentButton" class="btn">Go To Payment</button>
    </div>
  `;
  renderToDom(domString, '#order-details-page');
};

export default renderOrderDetailsPage;
