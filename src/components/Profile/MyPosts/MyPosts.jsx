import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.item}>
                <Post name="Tola" like="15"/>
                <Post name="Gosha" like="25"/>

            </div>
        </div>
    )
}
export default MyPosts;