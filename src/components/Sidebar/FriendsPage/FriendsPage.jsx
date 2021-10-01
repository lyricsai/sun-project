import { NavLink } from 'react-router-dom';
import './FriendsPage.scss'
import FriendItem from './FriendItem/FriendItem'


const FriendsPage = (props) => {

    let friendsElements = props.state.friendsData.map(friend => <FriendItem avatar={friend.avatar} name={friend.name} />)

    return (
        <div className="friendsPage">

            <NavLink to="/friends" className='friendsLink'>
                <h3 className='friendsPageTitle' >Friends</h3>
            </NavLink>
            <div className="friends__container">{friendsElements}</div>

        </div>
    )
}

export default FriendsPage