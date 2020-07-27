import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import restaurantDataReducer from './store/reducers/restaurantDataReducer';
import ReduxThunk from 'redux-thunk';
const rootReducer = combineReducers({
  restaurant: restaurantDataReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
