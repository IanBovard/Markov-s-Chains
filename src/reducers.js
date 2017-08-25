import { GET_TEXT, ADD_TEXT, EDIT_TEXT, DELETE_TEXT, MESSAGE_SEND, USER_CONNECT, MESSAGE_RECEIVED, SUCCESSFUL_CONNECTION, CREATE_USERNAME } from './actions';

let initialState = { userData:[] };

const textReducers = (state = initialState, action) => {
  switch (action.type) {
/*    case GET_TEXT:
      return getText(state, action);
    case ADD_TEXT:
      return addText(state, action);
    case EDIT_TEXT:
      return editText(state, action);
    case DELETE_TEXT:
      return deleteText(state, action);*/
    case MESSAGE_SEND:
      console.log("SEND reducer", action.payload);
      return state;
    case USER_CONNECT:
      console.log("CONNECT reducer", action);
      return state;
    case MESSAGE_RECEIVED:
      return messageReceived(state, action);
    case CREATE_USERNAME:
      return createUsername(state, action);
    default:
      return state;
  }
}

function messageReceived(state, action) {

  let messagePayload = JSON.parse(action.payload);
  if(messagePayload.OP === SUCCESSFUL_CONNECTION){
    localStorage.setItem("id", messagePayload.userId)

    return {
    userData: [
    ...state.userData
    ]
  }
  }else {
  return {
    userData: [
    ...state.userData,
    messagePayload.message
    ]
  }
}
}


function createUsername(state, action) {
  localStorage.setItem("username", action.payload.username)
  return {
    userData: [
    ...state.userData,
    {id: localStorage.id,
    username: localStorage.username}]
  }
}
/*function getText(state, action){
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
}*/

export default textReducers