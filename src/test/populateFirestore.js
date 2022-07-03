const firebase = require('firebase');
require('firebase/firestore');

const {
  reservations,
  restaurants,
  dateAvailabilities,
  reviews,
} = require('./testData');

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

const db = firebase.firestore();

const populateCollection = (collectionName, items) => {
  return Promise.all(
    items.map((items) => {
      const { id, ...data } = items;
      return db.collection(collectionName).doc(id).set(data);
    })
  );
};

Promise.all([
  populateCollection('reservations', reservations),
  populateCollection('reviews', reviews),
  populateCollection('restaurants', restaurants),
  populateCollection('dateAvailabilities', dateAvailabilities),
])
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
  });
