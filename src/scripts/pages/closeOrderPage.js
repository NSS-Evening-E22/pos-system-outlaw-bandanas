import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderCloseOrderPage = () => {
  clearDom();
  const domString = `
    <div>Close Order Form</div>
  `;

  renderToDom(domString, '#form-pages');
};

export default renderCloseOrderPage;
