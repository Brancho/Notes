import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import data from './data/events';

const defaultState =  {
  data
};


const store = createStore(rootReducer, defaultState);



export default store;