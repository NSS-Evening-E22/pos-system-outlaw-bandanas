import clearDom from '../../../utils/clearDom';
import renderToDOM from '../../../utils/renderToDom';

const renderCloseOrderPage = () => {
  clearDom();
  const domString = `
    <div>Close Order Form</div>
  `;

  renderToDOM(domString, '#form-pages');
};

export default renderCloseOrderPage();
