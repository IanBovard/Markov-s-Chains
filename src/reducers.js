import { /*GET_TEXT, ADD_TEXT, EDIT_TEXT, DELETE_TEXT,*/ MESSAGE_SEND, USER_CONNECT, MESSAGE_RECEIVED, SUCCESSFUL_CONNECTION, USER_DISCONNECTED, CREATE_USERNAME, DECLINE_INVITE, CHAT, CREATED_USER, RECEIVE_INVITE, ENTER_ROOM} from './actions';

let initialState = { userData:[],invitesFrom : null, // set when someone invites you to game
  goToRoom : false, // idk about this, need a better way to send users to /room route
  player1 : null,
  player2 : null, };

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
    return {
      userData: [
      ...state.userData,
        { id: action.payload.id,
          username: action.payload.username,
          message: action.payload.message
        }
      ]
    }
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
  console.log('payloadbkjnkjnkj', messagePayload);
  switch (messagePayload.OP) {

    case SUCCESSFUL_CONNECTION:
    return localStorage.setItem("id", messagePayload.userId)
    case RECEIVE_INVITE:

        return {
          userData: [
          ...state.userData
          ],  invitesFrom: messagePayload.sender
        }
      break;
    case ENTER_ROOM:
    console.log('reached room')
    console.log(messagePayload)
    if(messagePayload.player1 === localStorage.getItem("username")){
      localStorage.setItem("player", "player1")
    } else {
      localStorage.setItem("player", "player2")
    }
        return {
          userData: [
          ...state.userData
          ],
        player1 : messagePayload.player1,
        player2 : messagePayload.player2,
        goToRoom : true
        }
      break;
    case CREATED_USER:
        console.log('reached created user', state, 'messagepayload', messagePayload)
         return {
          userData: [
          ...state.userData,
          { username:messagePayload.username}
          ]
        }
      break;
    case CHAT:
    return {
      userData: [
      ...state.userData,
        { id: messagePayload.id,
          username: messagePayload.username,
          message: messagePayload.message
        }
      ]
    }
    case USER_DISCONNECTED:
    console.log("User Disconnected", action.payload);
    break;
    default:
    return state;
  }
}



function createUsername(state, action) {
  localStorage.setItem("username", action.payload.username)
  return {
    userData: [
    ...state.userData]
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