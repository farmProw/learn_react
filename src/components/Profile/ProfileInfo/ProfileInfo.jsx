import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img className={s.img}
                     src="https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D0%BB%D0%BE%D0%B5-beatch-%D1%81-%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D1%8B%D0%BC-%D0%BC%D0%BE%D1%80%D0%B5%D0%BC-%D0%BF%D0%BE%D0%B4-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5%D0%BC-132236144.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}
export default ProfileInfo