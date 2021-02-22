import preloader from "../../../assets/images/circles.svg";
import React from "react";
import s from './Preloder.module.css'
const Preloder =(props)=>{
    return(
        <div className={s.preloder__wrapper}>
            <img style={{height:'140px'}} src={preloader}/>
        </div>
    )
}
export default Preloder