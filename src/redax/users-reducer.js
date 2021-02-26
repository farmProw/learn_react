const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount:11,
    currentPage:3,
    isFetching:false,
    // is перед  свойством(перемінною)означає питання
}

 const  UsersReducer =(state=initialState, action)=>{
    switch (action.type) {
         case FOLLOW:
            return  {
                ...state,
                users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return{
                            ...u,followed:true,
                        }
                    }
                    return u;
                    //return u для того щоб повернути MAP елемент для масиву якщо IF===false
                })
            };
         case UNFOLLOW:
             return {
                 ...state,
                 users:state.users.map(u=>{
                     if(u.id===action.userId){
                         return{
                             ...u,followed:false
                         }
                     }
                     return u
                 })
             }
         case SET_USERS:
         return {
             ...state,users:action.users
         }
         case SET_CURRENT_PAGE:
         return {
             ...state,currentPage:action.currentPage
         }
         case SET_TOTAL_USERS_COUNT:
         return {
             ...state,totalUsersCount:action.total
         }
         case TOGGLE_IS_FETCHING:
             return {
                 ...state,
                 isFetching:action.isFetching
                 //як варіант було написати isFetching:!isFetching - змінювати на протилежне при співпадіннш TYPE
             }
         default: return state;
     }
}

export const follows =(userId)=>{
    return{
        type:FOLLOW,
        userId,
    }
};

export const unfollow =(userId)=>{
    return{
        type:UNFOLLOW,
        userId,
    }
};
export const setUsers=(users)=>{
    return{
        type:SET_USERS,
        users,
    }
};
export const setCurrentPage =(currentPage)=>{
    return{
        type:SET_CURRENT_PAGE,
        currentPage,
    }
};
export const setTotalUsersCount =(total)=>{
    return{
        type:SET_TOTAL_USERS_COUNT,
        total,
    }
}

export const toggleIsFetching =(isFetching)=>{
    return{
        type:TOGGLE_IS_FETCHING,
        isFetching

    }
}

export default UsersReducer;