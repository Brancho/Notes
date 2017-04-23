import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import events from './data/events';

const defaultState =  {
  events
};

console.log(defaultState);

const store = createStore(rootReducer, defaultState);



export default store;