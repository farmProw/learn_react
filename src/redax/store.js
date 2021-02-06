import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 13}
            ],
            newPostText: '',
        },
        dialogsPage: {
            arr1: [
                {name: "Andrey", id: "/1"},
                {name: "Sveta", id: "/2"},
                {name: "Ilya", id: "/3"},
                {name: "Tolya", id: "/4"},
                {name: "Anton", id: "/5"},
            ],
            arr2: [
                {message: "aaaaa", id: "1"},
                {message: "bbbbb", id: "2"},
                {message: "ccccc", id: "3"},
                {message: "ddddd", id: "4"},
                {message: "eeeee", id: "5"},
            ],
            newMessageBody:'',
        },
        sidebarReducer: {}


    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },


    subscribe(observing) {
        this._callSubscriber = observing;
    },
    dispatch(action) {

        this._state.profilePage=profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar=sidebarReducer(this._state.sidebar,action)
        this._callSubscriber(this._state)


    }
};





export default store;