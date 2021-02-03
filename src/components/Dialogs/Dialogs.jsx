import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
    console.log(props)
    const dialogsElements = props.arr1.arr1.map(e=><DialogItem name={e.name} id={e.id}/> );

    console.log(dialogsElements);
    const messageElements = props.arr2.arr2.map(e=><Message message={e.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs