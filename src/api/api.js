import axios from "axios";
import s from "../components/Users/Users.module.css";
export const getUsers = (currentPage,pageSize) =>{
  return   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {withCredentials:true})
      .then(response=>response.data)
};

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'339e32f9-ee3c-4d2d-9485-f937f3b7ba54'
    }
});

export const usersAPI={
  getUsers(currentPage,pageSize){
   return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
        response=>response.data
    )
  },
  Follow(id){
     return  instance.post(`follow/${id}`,).then(
          response=>response.data
      )
  },
  unFollow(id){
    return instance.delete(`follow/${id}`).then(
        response=>{
           return  response.data
        }

    )
  },
  // getProfile(userId){
  //     return instance.get(`profile/${userId}`)
  // },

};
export const profileAPI={
  getProfile(userId){
      return instance.get(`profile/${userId}`)
  },
    getStatus(userId){
      return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status){
      return instance.put(`/profile/status`,{status:status})
    }
};
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe = false){
      return instance.post('/auth/login',{email,password,rememberMe})
    },
    logout(){
      return instance.delete('/auth/login',)
    }
};

