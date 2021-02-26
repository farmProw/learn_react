const SET_USER_DATA = 'SET_USER_DATE';



let initialState = {
    id: null,
    email: null,
    login: null,
    // isFetching:false,
    // is перед  свойством(перемінною)означає питання
};

const  authReducer =(state=initialState, action)=>{

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default: return state;
    }};
export const setAuthUserData = (id,email,login) =>{
    return {
        type:SET_USER_DATA,
        data:{id,email,login}
    }
};
export default authReducer;