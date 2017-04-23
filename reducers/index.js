import { combineReducers } from 'redux';
import eventsRed from './eventsRed';

const rootReducer = combineReducers({
  events: eventsRed
});

export default rootReducer;