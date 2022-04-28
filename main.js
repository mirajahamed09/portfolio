console.log('Hello World!');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMP2DhGvNpKAAjraIcAjSodBP0O3EHxIM",
  authDomain: "portfolio-f6aaa.firebaseapp.com",
  projectId: "portfolio-f6aaa",
  storageBucket: "portfolio-f6aaa.appspot.com",
  messagingSenderId: "659731281113",
  appId: "1:659731281113:web:67b232a3b2248d12293ac8",
  measurementId: "G-Z6ELZXYMBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

AOS.init();
var options = {
  strings: [`I'm <span id='animation'>a Developer</span>`, `I'm <span id='animation'>a photographer</span>`,`I'm <span id='animation'>a graphic designerr</span>`],
  typeSpeed: 40,
  smartBackspace:true,
  startDelay:500,
  backDelay:500,
  backSpeed:50
};

var typed = new Typed('#animatedText', options);
