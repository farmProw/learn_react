import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redax/profile-reducer";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        userId = userId?userId:this.props.autorizedUserId;
         if(!userId) this.props.history.push('/login');
        this.props.getUserProfile(userId);
         this.props.getStatus(userId);


    }

    render() {
        return (
            <Profile {...this.props } profile={this.props.profile}/>
        )
    }
}

// let authRedirectComponent = withAuthRedirect(ProfileContainer);

// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth,
// });
//
// authRedirectComponent=connect(mapStateToPropsForRedirect)(authRedirectComponent)

// let authRedirectComponent = (props) =>{
//     if(!this.props.isAuth) return <Redirect to={'/login'} />
//     return <ProfileContainer {...props}/>
// }
//розкукожка пропса , щоб звільнити його властивості і не було в наступному етапі props.props...



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId:state.auth.id,
});
//пишем ({}) замість ретурн
export default compose(
    connect(mapStateToProps, { getStatus,
        updateStatus,
        getUserProfile,}),
    withRouter,
    withAuthRedirect,

)(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(authRedirectComponent);
//
// export default connect(mapStateToProps, {getUserProfile
// })(WithUrlDataContainerComponent)