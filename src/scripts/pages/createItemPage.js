import clearDom from '../../../utils/clearDom';
import renderToDOM from '../../../utils/renderToDom';

const renderCreateItemPage = () => {
  clearDom();
  const domString = `
    <div>Create item page</div>
  `;

  renderToDOM(domString, '#form-pages');
};

export default renderCreateItemPage();
