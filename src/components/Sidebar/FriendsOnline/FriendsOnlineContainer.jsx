import FriendsOnline from './FriendsOnline'
import FriendItem from './FriendItem/FriendItem'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {

    return {
        friendsElements: state.usersPage.friendsData
        .map(friend => <FriendItem avatar={friend.avatar} key={friend.id} name={friend.name} />)
    }
}

export default connect(mapStateToProps, {})(FriendsOnline)