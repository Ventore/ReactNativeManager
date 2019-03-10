import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';

import Router from './Router';

export default class App extends Component {
  constructor(props) {
    super(props);

    const config = {
      apiKey: 'AIzaSyD9hABjsj6-3p8-4tPEYpRfR9NPisCBJ_Y',
      authDomain: 'react-native-manager-b9e3c.firebaseapp.com',
      databaseURL: 'https://react-native-manager-b9e3c.firebaseio.com',
      projectId: 'react-native-manager-b9e3c',
      storageBucket: 'react-native-manager-b9e3c.appspot.com',
      messagingSenderId: '798376849963',
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <Router />
      </Provider>
    );
  }
}
