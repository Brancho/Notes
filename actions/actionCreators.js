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

export function deleteNote(note) {
  return {
    type: 'DELETE_NOTE',
    note
  }
}

export function pinNote(note) {
  return {
    type: 'PIN_NOTE',
    note
  }
}








