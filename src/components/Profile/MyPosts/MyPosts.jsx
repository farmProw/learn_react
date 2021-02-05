import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/state";



const MyPosts = (props) => {

    let getLinkTextarea = React.createRef();

    let getSetFn =()=>{
        // props.addPost()
        props.dispatch(addPostActionCreator());
    };

    let changePost =()=>{
        let text = getLinkTextarea.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    };

    let postsElements = props.profilePage.posts.map(e=><Post m={e.message} like={e.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={changePost} value={props.profilePage.newPostText} ref={getLinkTextarea}/>
                </div>
                <div>
                    <button  onClick={getSetFn}>Add Post</button>
                </div>
            </div>
            <div className={s.item}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;