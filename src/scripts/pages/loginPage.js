import renderToDom from '../utils/renderToDom';
import loginBackDrop from '../../assets/loginBackDrop.jpg';
import CCtransparent from '../../assets/CCtransparent.png';

const renderLoginPage = () => {
  const domString = `
  <div>
    <div class="login-bg">
      <img src="${loginBackDrop}" height="100%" width="100%" background-size="cover">
    </div>
    <img src="${CCtransparent}" height="300px" width="300px" class="login-logo">
  </div>
  `;

  renderToDom(domString, '#app');
};

export default renderLoginPage;
