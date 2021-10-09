import { connect } from 'react-redux'
import UserItem from './UserItem'
import React from 'react'
import axios from 'axios'
import { setUserProfile } from '../../../redux/usersPageReducer'



class UserItemContainer extends React.Component {



    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        debugger
        return (<div>
            <UserItem usersData={this.props.usersData} profile={this.props.profile} />
        </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersData,
        profile: state.profile,
    }

}

export default connect(mapStateToProps, { setUserProfile })(UserItemContainer)