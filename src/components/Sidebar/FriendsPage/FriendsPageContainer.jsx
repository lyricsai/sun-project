import './FriendsPage.scss'
import FriendsPage from './FriendsPage'
import FriendItem from './FriendItem/FriendItem'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {

    return {
        friendsElements: state.sidebar.friendsData.map(friend => <FriendItem avatar={friend.avatar} name={friend.name} />)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

let FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage)

export default FriendsPageContainer