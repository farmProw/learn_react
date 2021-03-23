import * as React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../../redax/auth-reducer";

/*
           * withCredentials это Boolean который определяет, должны ли создаваться
           * кросс-доменные Access-Control запросы с использованием таких
           * идентификационных данных как cookie, авторизационные заголовки
           * или TLS сертификаты.
            */
class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
};

export default connect(mapStateToProps, {setAuthUserData,logout})(HeaderContainer)