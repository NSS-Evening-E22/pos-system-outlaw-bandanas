import renderToDom from '../utils/renderToDom';

const renderLoginPage = () => {
  const domString = `
  <div>Login</div>
  `;

  renderToDom(domString, '#app');
};

export default renderLoginPage;
