const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

 const dialogsReducer = (state, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.arr2.push({message: body, id: 6})
        state.newMessageBody = ''

    }

    return state
}
export const sendMessageCreatorr = () =>{
    return {
        type: SEND_MESSAGE
    }
}


export const updateNewMessageBodyCreator = (body) =>{
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}

export default dialogsReducer;