const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 13}
    ],
    newPostText: '',
    profile:null,
}

 const  profileReducer =(state=initialState, action)=>{

     switch (action.type) {
         case 'ADD-POST':{
             let stateCopy = {...state};
             let newPost = {
                 id: 3,
                 message: state.newPostText,
                 likesCount: 0,
             };
             stateCopy.posts = [...state.posts]
             stateCopy.posts.push(newPost);
             stateCopy.newPostText = '';
             return stateCopy;
         }

         case 'UPDATE-NEW-POST-TEXT':{
             let stateCopy = {...state};
             stateCopy.newPostText = action.newText;
             return stateCopy;
         }
         case SET_USERS_PROFILE:
             return {
                 ...state,
                 profile:action.profile,
             }
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
export const setUserProfile =(profile)=>({type:SET_USERS_PROFILE,profile})
//короткий запис дужки поверх фігурних дужок замість ретурн
export default profileReducer;