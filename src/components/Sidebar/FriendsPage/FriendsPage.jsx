import './FriendsPage.scss'
import FriendItem from './FriendItem/FriendItem'

const FriendsPage = (props) => {

    let friendsElements = props.state.friendsData.map(friend => <FriendItem avatar={friend.avatar} name={friend.name} />)

    return (
        <div className="friendsPage">
            {/* <NavLink to="/friends" className='friendsLink'>Friends</NavLink> */}
            {/* <img src={props.state.friendsData.avatar} alt="avatar" /> */}
            {friendsElements}
        </div>
    )
}

export default FriendsPage