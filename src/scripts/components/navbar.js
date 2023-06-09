import renderToDom from '../utils/renderToDom';
import CCfullColor from '../../assets/CCfullColor.jpg';

const createNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid" style="background-color: #707070">
    <a class="navbar-brand" href="" id="go-home"><img src="${CCfullColor}" width="50px" height="50px"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" id="nav-viewOrders">View Orders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="create-orders" href="#">Create an Order</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" id="order-search" placeholder="Search" aria-label="Search">
      </form>
      <span>
        <div id="logout-div"></div>
      </span>
    </div>
  </div>
</nav>
  `;

  renderToDom(domString, '#navBar');
};

export default createNavbar;

// DROPDOWN FOR FILTER STRETCH GOAL

//  <li class="nav-item dropdown">
// <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//   Dropdown
// </a>
//  <ul class="dropdown-menu">
// <li><a class="dropdown-item" href="#">Action</a></li>
// <li><a class="dropdown-item" href="#">Another action</a></li>
// <li><hr class="dropdown-divider"></li>
// <li><a class="dropdown-item" href="#">Something else here</a></li>
// </ul>
// </li>
