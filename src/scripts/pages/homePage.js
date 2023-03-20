import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const renderHomePage = (user) => {
  clearDom();
  const domString = `
    <div id="welcome-user" class="my-5"><h1>Welcome ${user.displayName}!</h1></div>
    <div id="home-buttons" >
    <button type="button" class="btn btn-primary" id="view-orders">View Orders</button>
    <button type="button" class="btn btn-success" id="create-orders">Create an Order</button>
    <button type="button" class="btn btn-info" id="view-revenue">View Revenue</button>
    </div>
  `;

  renderToDom(domString, '#home-page');
};

export default renderHomePage;
