import firebase from 'firebase/app';
import 'firebase/auth';

const signMeOut = () => {
  document.querySelector('#app').innerHTML = '';
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-outline-logout ms-3">Signout</button>';
  document.querySelector('#logout-div').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
