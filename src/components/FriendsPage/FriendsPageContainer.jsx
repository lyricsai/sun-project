import FriendsPage from './FriendsPage'
import FriendItem from './FriendItem/FriendItem'
import { connect } from 'react-redux'
import { toggleFollowActionCreator, setUsersActionCreator } from '../../redux/friendsPageReducer'

let mapStateToProps = (state) => {

    return {
        friendsElements: state.friendsPage.friendsData.map(friend => <FriendItem avatar={friend.avatar} key={friend.id} name={friend.name} />),
        usersData: state.friendsPage.usersData
    }
}
let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        // follow: (userId) => { dispatch(followActionCreator(userId)) },
        // unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) },
        toggleFollow: (userId) => { dispatch(toggleFollowActionCreator(userId)) },
        setUsers: (usersData) => { dispatch(setUsersActionCreator(usersData)) },
    }
}

let FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage)

export default FriendsPageContainer