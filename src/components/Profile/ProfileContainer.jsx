import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../redux/profilePageReducer'
import { withRouter } from 'react-router'
import { usersAPI } from '../api/api'



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 20036
        }

        usersAPI.getUserProfile(userId)
            .then(response => {
                this.props.setUserProfile(response)
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