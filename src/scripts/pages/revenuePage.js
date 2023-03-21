import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderRevenuePage = () => {
  clearDom();
  const domString = `
  <div class="card text-center">
  <div class="card-header">
    Revenue
  </div>
  <div class="card-body">
    <h5 class="card-title">Total Revenue: 0.00 </h5>
    <p class="card-text">Total Tips: 0.00</p>
    <p class="card-text">Total Call In Orders: 0</p>
    <p class="card-text">Total Walk In Orders: 0</p>
    <p class="card-text">Payments in cash: 0</p>
    <p class="card-text">Payments in credit: 0</p>
  </div>
  <div class="card-footer text-muted">
    Date Range: 1 March 2023 - 31 March 2023
  </div>
</div>
  `;

  renderToDom(domString, '#revenue-page');
};

export default renderRevenuePage;
