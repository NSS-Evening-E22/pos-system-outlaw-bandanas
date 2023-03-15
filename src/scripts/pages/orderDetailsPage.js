import clearDom from '../../../utils/clearDom';
import renderToDom from '../../../utils/renderToDom';

const renderOrderDetailsPage = () => {
  clearDom();
  const domString = `
    <div>Order Details</div>
  `;

  renderToDom(domString, '#order-details-page');
};

export default renderOrderDetailsPage();
