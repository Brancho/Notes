import { combineReducers } from 'redux';
import eventsRed from './eventsRed';


const rootReducer = combineReducers({
  data: eventsRed
});

export default rootReducer;

