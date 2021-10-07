import { NavLink } from 'react-router-dom';
import s from './FriendsOnline.module.scss'


const FriendsOnline = (props) => {


    return < div className={s.friendsPage} >
        <NavLink to="/users" className={s.friendsLink}>
            <h3 className={s.friendsPageTitle} >Online</h3>
        </NavLink>
        <div className={s.friends__container}>{props.friendsElements}
        </div>
    </ div>
}

export default FriendsOnline