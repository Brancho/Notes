import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from './reducers/index';
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import { Actions, Scene } from 'react-native-router-flux';

const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const reducer = storage.reducer(rootReducer);
const store = createStoreWithMiddleware(reducer);
const load = storage.createLoader(engine);

// engine.save({});

load(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));

export default store;