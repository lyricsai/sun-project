import FriendsOnlineContainer from './FriendsOnline/FriendsOnlineContainer'
import Nav from './Nav/Nav'
import './Sidebar.scss'

const Sidebar = () => {
    return (

        <aside className='sidebar'>
            <Nav />
            <FriendsOnlineContainer />
        </aside>
    )
}

export default Sidebar