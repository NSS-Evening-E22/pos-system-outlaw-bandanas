import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const createOrderPage = () => {
  clearDom();
  const domString = `
    <h2 class="mb-4">Open Orders</h2>
    <div id="view-orders-content" class="d-flex justify-content-center gap-4 flex-wrap mx-auto w-75"></div>
    <h2 class="my-4">Closed Orders</h2>
    <div id="view-closedOrders-content" class="d-flex justify-content-center gap-4 flex-wrap mx-auto w-75"></div>
  `;

  renderToDom(domString, '#view-orders-page');
};

const showOrders = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 19rem;">
    <div class="card-body">
      <h5 class="card-title">${item.orderName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.status}</h6>
      <hr>
      <div id="card-info">
        <p class="card-text">${item.email}</p>
        <p class="card-text">${item.phoneNum}</p>
        <p class="card-text">Order Type: ${item.orderType}</p>
        <div id="card-buttons">
          <button class="btn btn-details btn-lrg" id="order-details-btn--${item.firebaseKey}">Details</button>
          <button class="btn btn-edit btn-lrg" id="edit-order-btn--${item.firebaseKey}">Edit</button>
          <button class="btn btn-delete btn-lrg" id="delete-order-btn--${item.firebaseKey}">Delete</button>
        </div>
      </div>
    </div>
  </div>`;
  });
  renderToDom(domString, '#view-orders-content');
};

const showClosedOrders = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.orderName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.status}</h6>
      <hr>
      <div id="card-info">
        <p class="card-text">${item.email}</p>

        <p class="card-text">${item.phoneNum}</p>

        <p class="card-text">Order Type: ${item.orderType}</p>
      </div>
    </div>
  </div>`;
  });
  renderToDom(domString, '#view-closedOrders-content');
};

export {
  createOrderPage,
  showOrders,
  showClosedOrders
};
