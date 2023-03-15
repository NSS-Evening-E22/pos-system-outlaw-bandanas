import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderViewOrdersPage = () => {
  clearDom();
  const domString = `
    <div>View Orders</div>
  `;

  renderToDom(domString, '#view-orders-page');
};

export default renderViewOrdersPage();
