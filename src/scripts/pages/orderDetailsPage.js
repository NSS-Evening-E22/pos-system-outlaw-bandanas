import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import itemCard from '../components/itemCard';

const priceTotaled = (array) => {
  let total = 0;
  array.forEach((item) => {
    total += item.itemPrice;
  });
  return total.toFixed(2);
};

const renderOrderDetailsPage = (array, orderId) => {
  const totalPrice = priceTotaled(array);
  clearDom();
  const domString = `
  <h1 class="mt-5">Total: $${totalPrice}</h1>
    <div id="itemCards" class="d-flex flex-column align-items-center "></div>
    <div id="itemDetailsButtons" class="d-flex justify-content-center gap-3 mt-4">
      <button id="addItemButton--${orderId}" class="btn btn-lg btn-addItem">Add Item</button>
      <button id="goToPaymentButton--${orderId}" class="btn btn-lg btn-payment">Go To Payment</button>
    </div>
  `;
  renderToDom(domString, '#order-details-page');
  itemCard(array);
};

export default renderOrderDetailsPage;
