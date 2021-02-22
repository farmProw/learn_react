import s from './ProfileInfo.module.css';
import Preloder from "../../Common/Preloder/Preloder";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloder/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.img}
                     src={props.profile.photos.large}></img>
                ava + description
            </div>

        </div>
    )
}
export default ProfileInfo