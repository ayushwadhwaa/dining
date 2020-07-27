import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {createStore, combineReducers} from 'redux';
import { Provider} from 'react-redux';
import locationReducer from './store/reducers/locationReducer';
import restaurantDataReducer from './store/reducers/restaurantDataReducer';
const rootReducer = combineReducers({
  location: locationReducer,
  restaurant: restaurantDataReducer
});
const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
