import renderToDom from '../utils/renderToDom';

const itemCard = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
    
      <div class="card w-75 m-3 ">
        <div class="card-body">
          <h5 class="card-title">${item.itemName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Price: ${item.itemPrice}Card subtitle</h6>
        </div>
        <div>
          <button id="" class="btn btn-sm btn-primary mb-2 mx-1">Edit</button>
          <button id="" class="btn btn-sm btn-warning mb-2 mx-1">Delete</button>
        </div>
      </div>
   
  `;
  });
  renderToDom(domString, '#itemCards');
};

export default itemCard;
