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
                     src="https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9 "></img>

            </div>
            <div className={s.descriptionBlock}>
                <img className={s.img}
                     src={props.profile.photos.large}></img>
                ava + description
            </div>

        </div>
    )
}
export default ProfileInfo