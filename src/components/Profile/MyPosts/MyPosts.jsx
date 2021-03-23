import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../Common/Preloder/FormsControl";

const maxLengthCreator10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let onAddPost =(values)=>{
        props.addPost(values.newPostText)
    };

    let postsElements = props.profilePage.posts.map(e=><Post m={e.message} like={e.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
               <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.item}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field
                type={'text'}
                name={'newPostText'}
                component={TextArea}
                placeholder={'write post'}
                validate={[required,maxLengthCreator10]}/>
            <button>Add Post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form:"newPostText"})(AddNewPostForm)


export default MyPosts;