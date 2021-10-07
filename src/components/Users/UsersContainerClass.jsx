import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import UsersContainer from './UsersContainer'
import { setUserProfile } from '../../redux/usersPageReducer'


class UsersContainerClass extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {

        return (<>
            <UsersContainer {...this.props} profile={this.props.profile} />
        </>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.usersPage.profile,
})

export default connect(mapStateToProps, { setUserProfile })(UsersContainerClass)