import uuidV4 from 'uuid/v4';
import _ from 'underscore';

function eventsRed(state = {}, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      const id = !!action.note.noteID ? action.note.noteID : uuidV4();
      return {
        ...state,
        notes: [{
          title: action.note.title,
          description: action.note.description,
          noteID: id
        }, ...state.notes
        ]
      };

    case 'EDIT_NOTE':
      const otherNotes =  _.reject(state.notes, function(n){
        return n.noteID == action.note.noteID
      });

      return {
        notes: [action.note, ...otherNotes]
      };

    default:
      return state;
  }
}

export default eventsRed;

