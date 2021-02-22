import Users from "./Users";
import {connect} from "react-redux";
import React from 'react';
import {
    follows,
    setTotalUsersCount,
    setCurrentPage,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redax/users-reducer";
import preloader from '../../assets/images/circles.svg'
import axios from "axios";
import Preloder from "../Common/Preloder/Preloder";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        //?page=...&count=... називається квері параметрами
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        });
    }
    onPageChanged=(page)=>{
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)


        });
    };

    render() {
        return (<>{this.props.isFetching?<Preloder/>:null}

            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follows={this.props.follows}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                onPageChanged={this.onPageChanged}
                // isFetching={this.props.isFetching}
            />
    </>
        )
    }
};

let m1 = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,

    }
}
// let m2 = (dispatch) => {
//     return {
//         follows: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(page)=>{
//             dispatch(setUserCurrent(page))
//         },
//          setTotalUsersCount:(total)=>{
//              dispatch(setTotalUsersCountAC(total))
//          },
//         toggleIsFetchingAC:(isFetching)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(m1, {
    follows,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer)