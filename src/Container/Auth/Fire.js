import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCiOL8f_uyjnb0mNO6XHNz_3I2jANC27Kk",
    authDomain: "login-23a6d.firebaseapp.com",
    projectId: "login-23a6d",
    storageBucket: "login-23a6d.appspot.com",
    messagingSenderId: "784003360362",
    appId: "1:784003360362:web:1f364a33ff43a6bd91cc13"
};
const fire = firebase.initializeApp(firebaseConfig);

export const auth = fire.auth()
export default fire;