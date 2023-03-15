import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const renderHomePage = () => {
  clearDom();
  const domString = `
    <div>Homepage</div>
  `;

  renderToDOM(domString, '#home-page');
};

export default renderHomePage();
