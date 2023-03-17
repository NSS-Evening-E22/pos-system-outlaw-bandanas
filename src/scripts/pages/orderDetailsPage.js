import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import itemCard from '../components/itemCard';

const renderOrderDetailsPage = (array, firebaseKey) => {
  console.warn(`OrderDetails page: ${firebaseKey}`);
  clearDom();
  const domString = `
  <h1 class="mt-5">Total: $100.00</h1>
    <div id="itemCards" class="d-flex flex-column align-items-center "></div>
    <div id="itemDetailsButtons" class="d-flex justify-content-center gap-3 mt-4">
      <button id="addItemButton--${firebaseKey}" class="btn btn-lg btn-warning">Add Item</button>
      <button id="goToPaymentButton" class="btn btn-lg btn-primary">Go To Payment</button>
    </div>
  `;
  renderToDom(domString, '#order-details-page');
  itemCard(array);
};

export default renderOrderDetailsPage;
