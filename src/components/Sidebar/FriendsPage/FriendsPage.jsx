import { NavLink } from 'react-router-dom';
import './FriendsPage.scss'


const FriendsPage = (props) => {
    return < div className="friendsPage" >
        <NavLink to="/friends" className='friendsLink'>
            <h3 className='friendsPageTitle' >Friends</h3>
        </NavLink>
        <div className="friends__container">{props.friendsElements}
        </div>
    </ div>
}

export default FriendsPage