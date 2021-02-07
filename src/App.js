import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";


const App = (props) => {
// debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                               // profilePage={props.state.profilePage}
                               // dispatch = {props.dispatch}
                        store={props.store}
                    />}></Route>
                    <Route path="/dialogs" render={() => <Dialogs
                               state={props.state}
                               dispatch = {props.dispatch}/>}></Route>
                    <Route path="/news" render={() => <News/>}></Route>
                    <Route path="/music" render={() => <Music/>}></Route>
                    <Route path="/settings" render={() => <Settings/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
