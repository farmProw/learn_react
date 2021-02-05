const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_POST = 'ADD-POST';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 13}
            ],
            newPostText: '',
        },
        messagesPage: {
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }

    }
};

export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default store;