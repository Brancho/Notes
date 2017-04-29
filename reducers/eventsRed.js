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
      const noteIndex = (state.notes.findIndex(x => x.noteID == action.note.noteID));
      const notes = state.notes;
      notes[noteIndex] = action.note;

      return {
        notes: notes
      };

    case 'DELETE_NOTE':
       const noteIndexD = (state.notes.findIndex(x => x.noteID == action.note.noteID));
      console.log(state.notes.length);
      const notess = [...state.notes.slice(0, noteIndexD),
                      ...state.notes.slice(noteIndexD + 1)
                    ];

      return {
        notes: notess
      };

    case 'PIN_NOTE':
      const noteIndexDD = (state.notes.findIndex(x => x.noteID == action.note.noteID));
      const notesss = [action.note ,...state.notes.slice(0, noteIndexDD),
        ...state.notes.slice(noteIndexDD + 1)
      ];
      return {
        notes: notesss
      };

    default:
      return state;
  }
}


export default eventsRed;






