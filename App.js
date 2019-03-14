import React from 'react';
import { Provider } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import { createStore } from 'redux'
import AllReducer from './Reducer'


import AppNavigator from './Route'


const store = createStore(AllReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
        <FlashMessage position="top" />
      </Provider>
    );
  }
}
