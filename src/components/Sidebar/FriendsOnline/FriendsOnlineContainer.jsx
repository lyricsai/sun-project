import FriendsOnline from './FriendsOnline'
import FriendItem from './FriendItem/FriendItem'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {

    return {
        friendsElements: state.friendsPage.friendsData.map(friend => <FriendItem avatar={friend.avatar} key={friend.id} name={friend.name} />)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

let FriendsOnlineContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsOnline)

export default FriendsOnlineContainer