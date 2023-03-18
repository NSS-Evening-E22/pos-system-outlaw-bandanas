import firebase from 'firebase/app';
import 'firebase/auth';

const signOut = () => {
  document.querySelector('#app').innerHTML = '';
  firebase.auth().signOut();
};

export default signOut;
