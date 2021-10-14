import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../redux/profilePageReducer'
import * as axios from 'axios'
import { withRouter } from 'react-router'




class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 20036
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {


        return (

            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

let mapsStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapsStateToProps, { setUserProfile })(WithUrlDataContainerComponent)