import domBuilder from './domBuilder';
import logoutButton from '../src/scripts/components/logoutButton';
// import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
// import navEvents from '../events/navEvents';
// // import renderHomePage from '../pages/homePage';
import createNavbar from '../components/navbar';

const startApp = () => {
  domBuilder();
  createNavbar();
  logoutButton();
  // domEvents();
  // formEvents();
  // navEvents();
  // renderHomePage();
};

export default startApp;