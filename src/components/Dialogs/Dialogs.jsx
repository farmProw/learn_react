import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/Preloder/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLengthCreator50 = maxLengthCreator(50);

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.arr1.map(e => <DialogItem name={e.name} id={e.id}/>);

    const messageElements = props.dialogsPage.arr2.map(e => <Message message={e.message}/>);


    console.log(dialogsElements);



    let addNewMessageBody = (values) => {
        debugger
         props.onSendMessageClick(values.newMessageBody)
    }


    // if(!props.isAuth) return <Redirect to={'/login'} />

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
               <AddMessageFormRedux onSubmit={addNewMessageBody}/>
            </div>
        </div>
    )
}



const AddMessageForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
         <Field placeholder={"write your message"} name={'newMessageBody'} component={TextArea} validate={[required,maxLengthCreator50]}/>
            <button>send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);

export default Dialogs