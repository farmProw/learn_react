import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Preloder/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redax/auth-reducer";
import {Redirect} from "react-router";
import s from "../../components/Common/Preloder/FormControl.module.css";


const maxLengthCreator20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field type="text" placeholder={'email'} name={'email'} component={Input} validate={[required,]}/></div>
                <div><Field type="text" placeholder={'password'} name={'password'} component={Input} validate={[required,maxLengthCreator20]}/></div>
                <div><Field type="checkbox" name={'rememberMe'} component={Input} validate={[required]}/></div>
                {props.error&&<div className={s.loginError}>{props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginRedaxForm  = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    // email,password,rememberMe
    const onSubmit = ({email,password,rememberMe}) =>{
        props.login(email,password,rememberMe)
    }

        if(props.isAuth){
            return <Redirect to={'/profile'}/>
        }
        return(<div>
            <h1>LOGIN</h1>
            <LoginRedaxForm onSubmit={onSubmit}/>
        </div>
        )

};


const mapStateToProps = (state) =>{
    return{
       isAuth:state.auth.isAuth,
    }
};
export default connect(mapStateToProps,{login})(Login)