 import s from '../MyPosts/MyPosts.module.css'
 import Post from './Post/Post'
const MyPosts =()=>{
   return(
      <div>
     My post
     <div>
        <textarea></textarea>
        <button>Add Post</button>
     </div>
     <div className={s.item}>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       </div>
    </div>
   )
}
export default MyPosts;