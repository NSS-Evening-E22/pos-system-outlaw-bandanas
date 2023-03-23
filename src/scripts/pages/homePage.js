import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import homePageBackDrop from '../../assets/homePageBackDrop.jpg';

const renderHomePage = (user) => {
  clearDom();
  const domString = `
    <div id="welcome-user">
      <img src="${homePageBackDrop}" height="100%" width="100%" background-size="cover">
      <div class="welcome">
        <h1>Welcome ${user.displayName}!</h1>
      </div>
      <div id="home-buttons">
        <button type="button" class="btn btn-viewOrd" id="view-orders">View Orders</button>
        <button type="button" class="btn btn-create" id="create-orders">Create an Order</button>
        <button type="button" class="btn btn-viewRev" id="view-revenue">View Revenue</button>
      </div>
    </div>
  `;

  renderToDom(domString, '#home-page');
};

export default renderHomePage;
