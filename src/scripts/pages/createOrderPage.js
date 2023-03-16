import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const createOrderPage = () => {
  clearDom();
  const domString = `
    <div>Create order page</div>
  `;

  renderToDOM(domString, '#form-pages');
};

export default createOrderPage;
