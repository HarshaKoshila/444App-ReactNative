import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import AllReducer from './Reducer'

import AppNavigator from './Route'


const store = createStore(AllReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
