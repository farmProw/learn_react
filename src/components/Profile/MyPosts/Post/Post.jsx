import s from './Post.module.css'
const Post =(props)=>{
   return(
        <div className={s.item}>
           <img  src="https://facegen.com/images/main_face.jpg"></img>
          {props.m}
          <div><span>{props.like}</span></div>
        </div>
   )
};

export default Post;