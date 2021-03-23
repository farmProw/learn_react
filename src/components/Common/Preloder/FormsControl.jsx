import s from './FormControl.module.css'
export const FormControl = ({input,meta,child,...props}) =>{
    let hasError = meta.touched&&meta.error;
    return(
        <div className={s.formControl + ' ' + (hasError?s.error:'') }>
            <div>
                {props.child}
            </div>
            {hasError&&<span>{meta.error}</span>}
        </div>


    )
}
export const TextArea = ({input,meta,...props}) =>{
    let hasError = meta.touched&&meta.error;
    return(
        <div className={s.formControl + ' ' + (hasError?s.error:'') }>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError&&<span>{meta.error}</span>}
        </div>


    )
}
export const Input = ({input,meta,...props}) =>{
    let hasError = meta.touched&&meta.error;
    return(
        <div className={s.formControl + ' ' + (hasError?s.error:'') }>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError&&<span>{meta.error}</span>}
        </div>
    )
}