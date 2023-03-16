import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const createOrderPage = () => {
  clearDom();
  const domString = `
    <div>Create order page</div>
  `;

  renderToDom(domString, '#form-pages');
};

export default createOrderPage;
