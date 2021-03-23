import {profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 13}
    ],
    profile:null,
    status:'',
}

 const  profileReducer =(state=initialState, action)=>{
     switch (action.type) {
         case 'ADD-POST':{
             let stateCopy = {...state};
             let newPost = {
                 id: 3,
                 message: action.body,
                 likesCount: 0,
             };
             stateCopy.posts = [...state.posts]
             stateCopy.posts.push(newPost);
             return stateCopy;
         }

         case SET_USERS_PROFILE:
             return {
                 ...state,
                 profile:action.profile,
             }
             case SET_STATUS:
             return {
                 ...state,
                 status:action.status,
             }
             case UPDATE_STATUS:
             return {
                 ...state,
                 status:action.status,
             }
         default: return state;
     }


}

export const addPostActionCreator = (body) => {
    return {
        type: ADD_POST,
        body
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const UpdateStatus = (status) => {
    return {
        type: UPDATE_STATUS,
        status
    }
}

 export const setUserProfile =(profile)=>({type:SET_USERS_PROFILE,profile})

export const getUserProfile =(userId)=>(dispatch)=>(
    profileAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
}))
export const getStatus =(userId)=>(dispatch)=>(
    profileAPI.getStatus(userId).then(response => {
        console.log(response.data)
    dispatch(setStatus(response.data));
}))
export const updateStatus =(status)=>(dispatch)=>(
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode===0){
            dispatch(UpdateStatus(status));
        }

}))
//короткий запис дужки поверх фігурних дужок замість ретурн
export default profileReducer;