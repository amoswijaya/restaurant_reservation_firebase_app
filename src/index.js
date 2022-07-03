import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const firebaseConfig = {
  apiKey: 'AIzaSyB0c_FMUEQP8ykVQB5lHRJJniuCic7TDA8',
  authDomain: 'reservation-app-15fa9.firebaseapp.com',
  projectId: 'reservation-app-15fa9',
  storageBucket: 'reservation-app-15fa9.appspot.com',
  messagingSenderId: '966165388096',
  appId: '1:966165388096:web:caf17b5a03e07b1cac38a5',
  measurementId: 'G-NHTCBGZ9JF',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
