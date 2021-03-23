import Users from "./Users";
import {connect} from "react-redux";
import React from 'react';
import {
    setTotalUsersCount,
    setCurrentPage,
    setUsers,
    toggleIsFetching,
    unfollow, toggleFollowingInProgres, getUsers, follow
} from "../../redax/users-reducer";
import Preloder from "../Common/Preloder/Preloder";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // //?page=...&count=... називається квері параметрами
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        //     this.props.toggleIsFetching(false)
        // });
    }
    onPageChanged=(page)=>{
        this.props.getUsers(page, this.props.pageSize)
          // this.props.setCurrentPage(page)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(page,this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.toggleIsFetching(false)
        //
        //
        // });
    };

    render() {
        return (<>{this.props.isFetching?<Preloder/>:null}

            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                followingInProgres={this.props.followingInProgres}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                onPageChanged={this.onPageChanged}
                toggleFollowingInProgres={this.props.toggleFollowingInProgres}
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
        followingInProgres:state.usersPage.followingInProgres,

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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgres,
    getUsers,
    // onPageChanged,

})(UsersContainer)