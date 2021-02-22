import * as React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redax/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props } profile={this.props.profile}/>
        )
    }
}

//розкукожка пропса , щоб звільнити його властивості і не було в наступному етапі props.props...
let mapDispatchToState = (state) => ({
    profile: state.profilePage.profile,
})
//пишем ({}) замість ретурн
export default connect(mapDispatchToState, {
    setUserProfile,
})(ProfileContainer)