import s from'./Header.module.css'
import {NavLink} from "react-router-dom";
const Header =(props)=>{
   return(
      <header className={s.header}>
      <img className={s.img} src="https://memegenerator.net/img/instances/64572741.jpg">
      </img>
          <div className={s.loginBlock}>
              {props.isAuth?<div><span>{props.login}</span><button onClick={props.logout}>Logout</button></div>:
                  <NavLink to ="/login">LOGIN</NavLink>}
          </div>
    </header>
   )
}
export default Header