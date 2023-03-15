const clearDom = () => {
  document.querySelector('#home-page').innerHTML = '';
  document.querySelector('#view-orders-page').innerHTML = '';
  document.querySelector('#order-details-page').innerHTML = '';
  document.querySelector('#form-pages').innerHTML = '';
  document.querySelector('#revenue-page').innerHTML = '';
};

export default clearDom;
