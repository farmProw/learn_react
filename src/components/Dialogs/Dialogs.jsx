import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
const DialogItem =(props)=>{
    const path = "/dialogs"+props.id;
    return(
        <div className={s.dialog + ' '+s.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}
const Message =(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}
// let arr = [{name:"Ola",age:28},{name:"GOla",age:128}];
const arr1 = [
    {name: "Andrey", id: "/1"},
    {name: "Sveta", id: "/2"},
    {name: "Ilya", id: "/3"},
    {name: "Tolya", id: "/4"},
    {name: "Anton", id: "/5"},
]
const arr2 = [
    {message: "aaaaa", id: "1"},
    {message: "bbbbb", id: "2"},
    {message: "ccccc", id: "3"},
    {message: "ddddd", id: "4"},
    {message: "eeeee", id: "5"},
]
const dialogsElements = arr1.map(e=><DialogItem name={e.name} id={e.id}/> );
console.log(dialogsElements);
const messageElements = arr2.map(e=><Message message={e.message}/> );
const Dialogs = (props) => {
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