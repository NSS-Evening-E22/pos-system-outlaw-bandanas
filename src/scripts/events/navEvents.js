import getItems from '../../api/itemData';
import renderOrderDetailsPage from '../pages/orderDetailsPage';
import renderHomePage from '../pages/homePage';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id.includes('itemDetails')) {
      getItems().then((data) => {
        console.warn(data);
        renderOrderDetailsPage(data);
      });

      if (e.target.id.includes('go-home')) {
        renderHomePage(user);
      }
    }
  });
};
export default navEvents;
