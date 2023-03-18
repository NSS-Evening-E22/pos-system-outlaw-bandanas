import renderToDom from './renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id="main-container">
    <div id="home-page"></div>
    <div id="view-orders-page" class="mt-4"></div>
    <div id="order-details-page"></div>
    <div id="form-pages" class="w-50 mx-auto mt-5"></div>
    <div id="revenue-page"></div>
  </div>
  `;

  renderToDom(domString, '#app');
};

export default domBuilder;
