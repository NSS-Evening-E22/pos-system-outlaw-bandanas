import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderRevenuePage = () => {
  clearDom();
  const domString = `
  <div class="card text-center">
  <div class="card-header">
    <h1>Revenue</h1>
  </div>
  <div class="card-body">
    <h4 class="card-title mb-3" id="total-revenue">Total Revenue: 0.00 </h4>
    <p class="card-text" id="total-tips">Total Tips: 0.00</p>
    <p class="card-text" id="total-call-in">Total Call In Orders: 0</p>
    <p class="card-text" id="total-walk-in">Total Walk In Orders: 0</p>
    <p class="card-text" id="total-cash-payments">Payments in cash: 0</p>
    <p class="card-text" id="total-card-payments">Payments in credit: 0</p>
  </div>
  <div class="card-footer text-muted">
    Date Range: 1 March 2023 - 31 March 2023
  </div>
</div>
  `;

  renderToDom(domString, '#revenue-page');
};

export default renderRevenuePage;
