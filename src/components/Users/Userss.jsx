// import React from "react";
// import s from './Users.module.css'
// import axios from "axios";
// import userPhoto from './../../assets/images/user.png'
//
// const Userss = (props) => {
//     const getUsers=()=>{
//         if(props.users.length===0) {
//
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//
//                 props.setUsers(response.data.items)
//             });
//         }
//     }
//
//
//
//
//     // props.setUsers(
//     //     [
//     //         {id: 1,
//     //             photoUrl:'https://c4.wallpaperflare.com/wallpaper/995/324/991/fizruk-fizruk-2-foma-dmitry-nagiyev-wallpaper-preview.jpg',
//     //             followed: false,
//     //             fullName: 'Dmitro',
//     //             status: 'i am a boss',
//     //             location: {city:'Minsk', country:'Belarus',}},
//     //         {id: 2,
//     //             photoUrl:'https://c4.wallpaperflare.com/wallpaper/995/324/991/fizruk-fizruk-2-foma-dmitry-nagiyev-wallpaper-preview.jpg',
//     //             followed: true,
//     //             fullName: 'Sasha',
//     //             status: 'i am a boss too',
//     //             location: {city:'Moscow', country:'Russia',}},
//     //         {id: 3,
//     //             photoUrl:'https://c4.wallpaperflare.com/wallpaper/995/324/991/fizruk-fizruk-2-foma-dmitry-nagiyev-wallpaper-preview.jpg',
//     //             followed: false,
//     //             fullName: 'Endru',
//     //             status: 'i am a boss too',
//     //             location: {city:'Kiev', country:'Ukraine',}},
//     //     ],
//     // )
//
//
//     return (
//
//         <div className={s.users__wrapper}>
//             <button onClick={getUsers}>GET USERS</button>
//             {
//             props.users.map(u => <div className={s.user__items} key={u.id}>
//                 <div className={s.user__item}>
//                     <div className={s.user__img_wrapper}>
//                         <img className={s.user__avatar} src={u.photos.small !=null ? u.photos.small:userPhoto} alt="img"/>
//                     </div>
//                     <div className={s.user__btn_wrapper}>
//                         {u.followed
//                             ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
//                             :<button onClick={()=>{props.follows(u.id)}}>follow</button>
//                         }
//                     </div>
//                 </div>
//                 <div className={s.user__item}>
//                     <div className={s.user__item_content}>
//                         <div className={s.content__item}>
//                             <div className={s.user__name}>{u.name}</div>
//                             <div className={s.user__status}>{u.status}</div>
//                         </div>
//                         <div className={s.content__item}>
//                             <div className={s.user__location_country}>{'u.location.country'}</div>
//                             <div className={s.user__location_city}>{'u.location.city'}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>)
//         }</div>
//     )
// }
//
//
// // export default Userss;