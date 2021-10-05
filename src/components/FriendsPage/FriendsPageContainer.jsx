import FriendsPage from './FriendsPage'
import FriendItem from './FriendItem/FriendItem'
import { connect } from 'react-redux'
import { followAC, unFollowAC, toggleFollowAC, setUsersAC } from '../../redux/friendsPageReducer'

let mapStateToProps = (state) => {

    return {
        friendsElements: state.friendsPage.friendsData.map(friend => <FriendItem avatar={friend.avatar} key={friend.id} name={friend.name} />),
        usersData: state.friendsPage.usersData
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        toggleFollow: (userId) => { dispatch(toggleFollowAC(userId)) },
        setUsers: (usersData) => { dispatch(setUsersAC(usersData)) },
    }
}

let FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage)

export default FriendsPageContainer