import * as React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redax/auth-reducer";
/*
           * withCredentials это Boolean который определяет, должны ли создаваться
           * кросс-доменные Access-Control запросы с использованием таких
           * идентификационных данных как cookie, авторизационные заголовки
           * или TLS сертификаты.
            */
class HeaderContainer extends React.Component {
componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
        withCredentials:true
    })
        .then(response => {
            if(response.data.resultCode===0){
                let {id,email,login } = response.data.data;
                console.log(id)
                    this.props.setAuthUserData(id, email, login);
            }
        });
}

    render() {
        return <Header {...this.props}/>

    }
}
let mapStateToProps=(state)=>{
    return{
a:1
    }
};
export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)