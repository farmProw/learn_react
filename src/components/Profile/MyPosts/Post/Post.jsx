import s from './Post.module.css'
const Post =()=>{
   console.log(s.img)
   return(
      
        <div className={s.item}>
           <img  src="https://facegen.com/images/main_face.jpg"></img>
          post 1
          <div><span>like</span></div>
        </div>
        
     
   )
};

export default Post;