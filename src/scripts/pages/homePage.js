import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderHomePage = () => {
  clearDom();
  const domString = `
    <div>Homepage</div>
  `;

  renderToDom(domString, '#home-page');
};

export default renderHomePage;
