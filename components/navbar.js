import renderToDom from '../utils/renderToDom';

const createNavbar = () => {
  const domString = `
  <div>Navbar</div>
  <div id="logout-button"></div>
  `;

  renderToDom(domString, 'navbar');
};

export default createNavbar;
