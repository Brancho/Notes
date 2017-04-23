function eventsRed(state = {}, action) {
  switch (action.type) {
    case 'ADD_EVENT':
      console.log(action);
      return [...state, {
        name : action.event.eventName,
        description : action.event.eventDescription,
        img : action.event.eventImgURL
      }];
    default:
      return state;
  }
}

export default eventsRed;

