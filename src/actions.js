const socket = new WebSocket('ws://10.0.1.149:3001');

/*export const GET_TEXT = 'GET_TEXT'
export const ADD_TEXT = 'ADD_TEXT'
export const EDIT_TEXT = 'EDIT_TEXT'
export const DELETE_TEXT = 'DELETE_TEXT'
export const USER_DISCONNECT = "USER_DISCONNECT"*/
export const MESSAGE_SEND = 'MESSAGE_SEND'
export const USER_CONNECT = "USER_CONNECT"
export const SUCCESSFUL_CONNECTION = "SUCCESSFUL_CONNECTION"
export const CREATE_USERNAME = "CREATE_USERNAME"
export const MESSAGE_RECEIVED = "MESSAGE_RECEIVED"
export const SEND_INVITE = "SEND_INVITE"
export const ACCEPT_INVITE = "ACCEPT_INVITE"
export const DECLINE_INVITE = "DECLINE_INVITE"
export const CHAT = "CHAT"
export const CREATED_USER = "CREATED_USER"
export const CONNECTED = "CONNECTED"
export const BROADCAST_USERNAME = "BROADCAST_USERNAME"


export const userConnect = () => {
  return ( dispatch ) => {
    socket.addEventListener('open', () => {
      dispatch({ type: USER_CONNECT, success: true, payload: 'user has connected' })
    })
    socket.addEventListener('message', (message) => {
      dispatch({ type: MESSAGE_RECEIVED, success: true, payload: message.data})
    })
  }
}

export const createUsername = (username) => {
  console.log('username', username)
  return ( dispatch ) => {
    socket.send(JSON.stringify({
      OP: CONNECTED,
      message: username
    }))
    dispatch({ type: CREATE_USERNAME, success: true, payload: username })
  }
}

export const broadcastUsers = ( username ) => {
  return ( dispatch ) => {
    socket.send(JSON.stringify({
      OP: BROADCAST_USERNAME,
      username}));
      dispatch({ type: CREATED_USER, success: true, payload: username}
      );
  }
}

export const messageSend = ( message ) => {
  return ( dispatch ) => {
    socket.send(JSON.stringify({
      OP: CHAT,
      message}));
      dispatch({ type: MESSAGE_SEND, success: true, payload: message });
  }
}

export const sendInvite = ( invite ) => {
  return ( dispatch ) => {
    socket.send(JSON.stringify({
      OP: SEND_INVITE,
      invite}));
      dispatch({ type: MESSAGE_SEND, success: true, payload: invite });
  }
}
























/*export const getText = () => {
  return ( dispatch ) => {
    fetch('/api/texts')
    .then(texts => texts.json())
    .then(texts => {
      dispatch({
        type: GET_TEXT,
        payload: texts
      })
    })
  }
}
export const addText = (text) => {
  return ( dispatch ) => {
    fetch('/api/texts', {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, ',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(text)
    })
    .then(words => words.json())
    .then(words => {
      dispatch({
        type: ADD_TEXT,
        payload: words
      })
    })
  }
}
*/





/*export function editCard(card) {
  return { type: EDIT_CARD,
           card: card
         }
}
export function deleteCard(card) {
  return { type: DELETE_CARD,
           card: card
         }
}
*/