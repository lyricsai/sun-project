import { follow, unFollow, setUsers, } from '../../redux/usersPageReducer'
import { connect } from 'react-redux'
import Users from './Users'


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,

    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers,
})(Users)