import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";



const MyPosts = (props) => {

    let getLinkTextarea = React.createRef();

    let onAddPost =()=>{
        props.addPost()
        // props.dispatch(addPostActionCreator());
    };

    let onPostChange =()=>{
        let text = getLinkTextarea.current.value;
        props.updateNewPostTextActionCreator(text);

    };

    let postsElements = props.profilePage.posts.map(e=><Post m={e.message} like={e.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={getLinkTextarea}/>
                </div>
                <div>
                    <button  onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.item}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;