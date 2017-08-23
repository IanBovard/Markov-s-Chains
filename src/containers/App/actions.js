export const GET_TEXT = 'GET_TEXT'
export const ADD_TEXT = 'ADD_TEXT'
export const EDIT_TEXT = 'EDIT_TEXT'
export const DELETE_TEXT = 'DELETE_TEXT'
export const OP_PING = 'OP_PING'


export const getText = () => {
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
    .then(texts => texts.json())
    .then(texts => {
      dispatch({
        type: ADD_TEXT,
        payload: texts
      })
    })
  }
}


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