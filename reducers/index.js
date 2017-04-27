import { combineReducers } from 'redux';
import eventsRed from './eventsRed';
import storageReducer from './storageReducer';

const rootReducer = combineReducers({
  data: eventsRed,
  storageReducer
});

export default rootReducer;