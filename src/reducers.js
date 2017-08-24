import { GET_TEXT, ADD_TEXT, EDIT_TEXT, DELETE_TEXT, MESSAGE_SEND, USER_CONNECT } from './actions';

const textReducers = (state = [], action) => {
  switch (action.type) {
    case GET_TEXT:
      return getText(state, action);
    case ADD_TEXT:
      return addText(state, action);
    case EDIT_TEXT:
      return editText(state, action);
    case DELETE_TEXT:
      return deleteText(state, action);
    case MESSAGE_SEND:
      console.log(action);
    case USER_CONNECT:
      console.log(action.payload);
    default:
      return state;
  }
}

function getText(state, action){
  var transform = action.payload.map(question=> {
    return {
      id: question.id +'gt',
      text: question.text
    };
  })
  return transform
}

function addText(state, action) {
  return [
    ...state,
      ...action.payload
  ];
}

function editText(state, action) {
  var textEdits = action.text
  var newState = state.filter(text=> {
    return text.id !== action.text.id
  });

  return [
  ...newState, {
      id: textEdits.id,
      title: textEdits.title,
      priority: textEdits.priority,
      status: textEdits.status,
      createdBy: textEdits.createdBy,
      assignedTo: textEdits.assignedTo
    }]

}

function deleteText(state, action) {
  return state.filter(text=> {
    return text.id !== action.text
  })
}

export default textReducers