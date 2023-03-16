import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from '../utils/startApp';
import renderLoginPage from '../pages/loginPage';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      // logoutButton();
      startApp();
    } else {
      // person is NOT logged in
      loginButton();
      renderLoginPage();
    }
  });
};

export default checkLoginStatus;
