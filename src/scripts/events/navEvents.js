import createOrderPage from '../pages/createOrderPage';
// import signOut from '../helpers/signOut';

const navEvents = () => {
  // document.querySelector('#logout-button')
  //   .addEventListener('click', signOut);

  document.querySelector('#navBar').addEventListener('click', (e) => {
    console.warn(e.target);

    if (e.target.id.includes('create-orders')) {
      createOrderPage();
    }
  });
};

export default navEvents;
