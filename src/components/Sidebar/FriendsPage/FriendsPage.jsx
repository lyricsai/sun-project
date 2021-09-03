import { NavLink } from 'react-router-dom';
import './FriendsPage.scss'
import FriendItem from './FriendItem/FriendItem'


const FriendsPage = (props) => {

    let friendsElements = props.state.friendsData.map(friend => <FriendItem avatar={friend.avatar} name={friend.name} />)

    return (
        <div className="friendsPage">
            <h3 className='friendsPageTitle' >Friends</h3>
            <NavLink to="/friends" className='friendsLink'></NavLink>
            {/* <img src={props.state.friendsData.avatar} alt="avatar" /> */}
            {friendsElements}
        </div>
    )
}

export default FriendsPage