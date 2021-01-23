import s from './Post.module.css'
const Post =(props)=>{
   console.log(s.img)
   return(
      
        <div className={s.item}>
           <img  src="https://facegen.com/images/main_face.jpg"></img>
          {props.name}, {props.like}
          <div><span>{props.like}</span></div>
          
        </div>
        
     
   )
};

export default Post;