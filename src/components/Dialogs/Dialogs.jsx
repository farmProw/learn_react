import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreatorr, updateNewMessageBodyCreator} from "../../redax/state";


const Dialogs = (props) => {

    const dialogsElements = props.state.messagesPage.arr1.map(e => <DialogItem name={e.name} id={e.id}/>);

    const messageElements = props.state.messagesPage.arr2.map(e => <Message message={e.message}/>);

    // = props.state.messagesPage.arr2.map(e=><Message message={e.message}/> );

    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreatorr())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>< textarea value={newMessageBody} onChange={onNewMessageChange}
                                placeholder='Enter your message'></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs