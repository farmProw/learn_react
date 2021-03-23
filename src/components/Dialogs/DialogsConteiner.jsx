import React from "react";
import {sendMessageCreator,} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


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
        newMessageBody: state.dialogsPage.newMessageBody,
    }
};

let m1 = (dispatch) => {
    return {
        onSendMessageClick: (body) => {
            dispatch(sendMessageCreator(body))
        },
    }
};

export default compose(connect(m2, m1),
    withAuthRedirect)
(Dialogs);
// const DialogsContainer = connect(m2, m1)(authRedirectComponent);
// export default DialogsContainer;