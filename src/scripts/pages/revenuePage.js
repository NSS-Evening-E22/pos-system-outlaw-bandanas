import clearDom from '../../../utils/clearDom';
import renderToDom from '../../../utils/renderToDom';

const renderRevenuePage = () => {
  clearDom();
  const domString = `
    <div>Revenue Page</div>
  `;

  renderToDom(domString, '#revenue-page');
};

export default renderRevenuePage();
