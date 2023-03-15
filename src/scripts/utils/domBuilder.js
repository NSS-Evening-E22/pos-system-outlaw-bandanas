import renderToDom from './renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id="main-container">
    <div id="home-page"></div>
    <div id="view-orders-page"></div>
    <div id="order-details-page"></div>
    <div id="form-pages"></div>
    <div id="revenue-page"></div>
  </div>
  `;

  renderToDom(domString, '#app');
};

export default domBuilder;
