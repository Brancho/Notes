function eventsRed(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        events: [...state.events, {
          name: action.event.eventName,
          description: action.event.eventDescription,
          img: action.event.eventImgURL
        }
      ]
  }

    // case 'SET_ACTIVE_EVENT':
    //   return {...state, activeEvent : action.id}

    default:
      return state;
  }
}

export default eventsRed;

