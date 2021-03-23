import React from 'react';
import {addPostActionCreator, } from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//                 let changePost = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action)
//                 };
//
//                 return (
//                     <MyPosts updateNewPostTextActionCreator={changePost}
//                              addPost={addPost}
//                              newPostText={state.profilePage.newPostText}
//                              profilePage={store.getState().profilePage}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

let m1=(state)=>{
    return{
        newPostText:state.profilePage.newPostText,
        profilePage:state.profilePage,
    }
}
let m2 =(dispatch)=>{
    return{
        addPost:(text)=>{
            dispatch(addPostActionCreator(text))
        }
    }
}

let MyPostsContainer = connect(m1, m2)(MyPosts)

export default MyPostsContainer;