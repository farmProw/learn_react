import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "./components/hoc/withAuthRedirect";
import {compose} from "redux";
import {getAuthUserData} from "./redax/auth-reducer";
// import {withRouter} from "react-router";
import appReducer, {initializeApp} from "./redax/app-reducer";
import Preloder from "./components/Common/Preloder/Preloder";
import {withRouter} from "react-router";


class App extends Component {
    componentDidMount() {this.props.initializeApp()}
    render() {
        if(!this.props.initialized) return <Preloder/>
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}></Route>
                    <Route path="/dialogs" render={() => < DialogsContainer/>}></Route>
                    <Route path="/users" render={() => <UsersContainer/>}></Route>
                    <Route path="/login" component={() => <Login/>}></Route>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) =>({initialized:state.app.initialized});

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp,getAuthUserData,withAuthRedirect})
)(App);
