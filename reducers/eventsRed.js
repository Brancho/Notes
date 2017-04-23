function eventsRed(state = {}, action) {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        arr: [...state.arr, action.newItem]
      };
    default:
      return state;
  }
}

export default eventsRed;

