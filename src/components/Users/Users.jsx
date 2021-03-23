import React from "react";
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.users__wrapper}>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div className={s.user__items} key={u.id}>
                    <div className={s.user__item}>
                        <div className={s.user__img_wrapper}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.user__avatar}
                                     src={u.photos.small != null ? u.photos.small : userPhoto} alt="img"/>
                            </NavLink>

                        </div>
                        <div className={s.user__btn_wrapper}>
                            {u.followed
                                ? <button disabled={props.followingInProgres.some(e => e == u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgres.some(e => e == u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.user__item}>
                        <div className={s.user__item_content}>
                            <div className={s.content__item}>
                                <div className={s.user__name}>{u.name}</div>
                                <div className={s.user__status}>{u.status}</div>
                            </div>
                            <div className={s.content__item}>
                                <div className={s.user__location_country}>{'u.location.country'}</div>
                                <div className={s.user__location_city}>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }</div>
    )
}


export default Users;