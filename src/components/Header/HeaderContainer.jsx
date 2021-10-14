import * as axios from 'axios';
import React from 'react';
import Header from './Header';
import { setAuthUserData } from '../../redux/authReducer'
import { toggleIsFetching } from '../../redux/usersPageReducer'
import { connect } from 'react-redux'


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {

                withCredentials: true
            })
            .then(response => {

                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {

        return (
            <Header {...this.props} />
        )
    }
}

let mapsStateToProps = (state) => ({
    isFetching: state.usersPage.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapsStateToProps, { toggleIsFetching, setAuthUserData })(HeaderContainer);