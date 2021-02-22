const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    arr1: [
        {name: "Andrey", id: "/1"},
        {name: "Sveta", id: "/2"},
        {name: "Ilya", id: "/3"},
        {name: "Tolya", id: "/4"},
        {name: "Anton", id: "/5"},
    ],
    arr2: [
        {message: "aaaaa", id: "1"},
        {message: "bbbbb", id: "2"},
        {message: "ccccc", id: "3"},
        {message: "ddddd", id: "4"},
        {message: "eeeee", id: "5"},
    ],
    newMessageBody:'',
}

 const dialogsReducer = (state=initialState, action) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY: {
             let stateCopy = {...state};
             stateCopy.newMessageBody = action.body;
             return stateCopy;
         }
         case SEND_MESSAGE: {
             let stateCopy = {...state};
             let body = stateCopy.newMessageBody;
             // stateCopy.arr2 = [...state.arr2]
             stateCopy.arr2.push({message: body, id: 6})
             stateCopy.newMessageBody = ''
             return stateCopy;
         }
         default:
             return state;

     }
     return state
}
export const sendMessageCreator = () =>{
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