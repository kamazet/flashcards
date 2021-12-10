import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
const firebaseConfig = {
  apiKey: "AIzaSyBrvxDOfWgFs8C8xeBWMaRfo16MwF257a4",
  authDomain: "flashcards-2c958.firebaseapp.com",
  databaseURL: "https://flashcards-2c958-default-rtdb.firebaseio.com",
  projectId: "flashcards-2c958",
  storageBucket: "flashcards-2c958.appspot.com",
  messagingSenderId: "696981535691",
  appId: "1:696981535691:web:23442bad7b786312b1144e"
};
firebase.initializeApp(firebaseConfig);
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});
// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);