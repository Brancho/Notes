export function addNote(note, noteID) {
  return {
    type: 'ADD_NOTE',
    note,
    noteID
  }
}

export function editNote(note) {
  return {
    type: 'EDIT_NOTE',
    note
  }
}





