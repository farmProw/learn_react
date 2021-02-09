import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


// const DialogsContainer = (props) => {
// // debugger
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let dialogsPage = store.getState().dialogsPage
//
//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator())
//                     }
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessageBodyCreator(body))
//                     }
//
//                     return (
//                         <Dialogs onNewMessageChange={onNewMessageChange}
//                                  onSendMessageClick={onSendMessageClick}
//                                  dialogsPage={dialogsPage}
//                                  newMessageBody={dialogsPage.newMessageBody}/>
//                     )
//                 }
//             }
//
//
//         </StoreContext.Consumer>
//     )
// };

let m2 = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody:state.dialogsPage.newMessageBody
    }
};

let m1 = (dispatch) => {
    return {
        onNewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
    }
};


const DialogsContainer = connect(m2, m1)(Dialogs);



export default DialogsContainer;