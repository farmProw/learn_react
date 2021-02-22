import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
// debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <ProfileContainer/>}></Route>
                    <Route path="/dialogs" render={() => < DialogsContainer/>}></Route>
                  <Route path="/users" render={()=> <UsersContainer/>}></Route>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
