import { LOAD, SAVE } from 'redux-storage';
import { Actions } from 'react-native-router-flux';

function storeageAwareReducer(state = { loaded: false }, action) {
  switch (action.type) {
    case LOAD:
      // Actions.Home();
      return { ...state, loaded: true };

    case SAVE:
      console.log('Something has changed and written to disk!');
      return { ...state, loaded: true };

    default:
      return state;
  }
}

export default storeageAwareReducer;