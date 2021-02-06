const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 13}
    ],
    newPostText: '',
}

 const  profileReducer =(state=initialState, action)=>{
     switch (action.type) {
         case 'ADD-POST':
             let newPost = {
                 id: 3,
                 message: state.newPostText,
                 likesCount: 0,
             };
             state.posts.push(newPost);
             state.newPostText = '';
             return state;
         case 'UPDATE-NEW-POST-TEXT':
             state.newPostText = action.newText;
             return state;
         default: return state;
     }


}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
export default profileReducer;