import uuidV4 from 'uuid/v4';


function notes(state = [], action) {
  switch (action.type) {

    case 'ADD_NOTE':
      const id = !!action.note.noteID ? action.note.noteID : uuidV4();
      return [
        {
          title: action.note.title,
          description: action.note.description,
          noteID: id
        }, ...state
      ];

    case 'EDIT_NOTE':
      const noteIndex = (state.findIndex(x => x.noteID == action.note.noteID));
      state[noteIndex] = action.note;
      return state;
    case 'DELETE_NOTE':
      let noteIndexD = (state.findIndex(x => x.noteID == action.note.noteID));
      return [...state.slice(0, noteIndexD),
        ...state.slice(noteIndexD + 1)
      ];
    case 'PIN_NOTE':
      const noteIndexDD = (state.findIndex(x => x.noteID == action.note.noteID));
      return [action.note, ...state.slice(0, noteIndexDD),
        ...state.slice(noteIndexDD + 1)
      ];
    default:
      return state;
  }
}


export default notes;






