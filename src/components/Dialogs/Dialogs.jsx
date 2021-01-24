import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' '+s.active}><NavLink to="/dialogs/1">Andrey</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/2">Sveta</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/3">Tolya</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/4">Ilya</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/5">Anton</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your Name</div>
                <div className={s.message}>Fine,yo</div>
            </div>
        </div>
    )
}
export default Dialogs