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
       <Post name="Tola" like="15"/>
       <Post name = "Gosha" like = "25"/>
  
       </div>
    </div>
   )
}
export default MyPosts;