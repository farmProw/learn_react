
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
// debugger
let state = props.store.getState();
    let addPost =()=>{
         props.store.dispatch(addPostActionCreator());
    };
    let changePost =(text)=>{
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    };

    return (
       <MyPosts updateNewPostTextActionCreator={changePost}
                addPost={addPost}
                newPostText = {state.profilePage.newPostText}
                profilePage={props.store.getState().profilePage}/>
    )
}

export default MyPostsContainer;