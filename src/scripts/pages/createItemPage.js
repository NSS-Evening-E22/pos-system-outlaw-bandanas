import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderCreateItemPage = () => {
  clearDom();
  const domString = `
    <div>Create item page</div>
  `;

  renderToDom(domString, '#form-pages');
};

export default renderCreateItemPage;
