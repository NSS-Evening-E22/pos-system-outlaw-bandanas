import domBuilder from './domBuilder';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { searchEvents, navEvents } from '../events/navEvents';
import renderHomePage from '../pages/homePage';
import createNavbar from '../components/navbar';

const startApp = (user) => {
  domBuilder();
  createNavbar();
  logoutButton();
  domEvents();
  formEvents(user);
  navEvents(user);
  renderHomePage(user);
  searchEvents();
};

export default startApp;
