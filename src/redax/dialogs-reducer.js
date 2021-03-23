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

}

 const dialogsReducer = (state=initialState, action) => {
     switch (action.type) {

         case SEND_MESSAGE: {
             let stateCopy = {...state};
             stateCopy.arr2.push({message: action.body, id: 6})
             return stateCopy;
         }
         default:
             return state;

     }
     return state
}
export const sendMessageCreator = (body) =>{
    return {
        type: SEND_MESSAGE,
        body,
    }
}




export default dialogsReducer;