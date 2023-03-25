import renderToDom from '../utils/renderToDom';

const itemCard = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
    
      <div class="card w-75 m-3 ">
        <div class="card-body">
          <h5 class="card-title">${item.itemName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Price: $${item.itemPrice.toFixed(2)}</h6>
        </div>
        <div>
          <button id="edit-item-btn--${item.firebaseKey}" class="btn btn-sm btn-item-edit mb-2 mx-1">Edit</button>
          <button id="delete-item-btn--${item.firebaseKey}--${item.orderId}" class="btn btn-sm btn-delete mb-2 mx-1">Delete</button>
        </div>
      </div>
   
  `;
  });
  renderToDom(domString, '#itemCards');
};

export default itemCard;
