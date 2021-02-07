import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
// debugger

    let dialogsPage = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs onNewMessageChange={onNewMessageChange}
                 onSendMessageClick={onSendMessageClick}
                 dialogsPage = {dialogsPage}
                 newMessageBody={dialogsPage.newMessageBody}/>

    )
};

export default DialogsContainer;