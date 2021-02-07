import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redax/redux-store";

let rerenderFn = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                store = {store}
                state={store.getState()}
            dispatch = {store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
store.subscribe(()=> {
    let state=store.getState()
    rerenderFn(state)})
rerenderFn(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
