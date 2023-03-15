import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const renderCreateOrderPage = () => {
  clearDom();
  const domString = `
    <div>Create order page</div>
  `;

  renderToDOM(domString, '#form-pages');
};

export default renderCreateOrderPage;
