import getItems from '../../api/itemData';
import renderOrderDetailsPage from '../pages/orderDetailsPage';

const navEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id.includes('itemDetails')) {
      getItems().then((data) => {
        console.warn(data);
        renderOrderDetailsPage(data);
      });
    }
  });
};

export default navEvents;
