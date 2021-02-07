import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reducer";


const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.arr1.map(e => <DialogItem name={e.name} id={e.id}/>);

    const messageElements = props.dialogsPage.arr2.map(e => <Message message={e.message}/>);

    let btnClick = () => {
        props.onSendMessageClick()
    }
    let textAreaChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>< textarea value={props.newMessageBody} onChange={textAreaChange}
                                placeholder='Enter your message'></textarea></div>
                <div>
                    <button onClick={btnClick}>send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs