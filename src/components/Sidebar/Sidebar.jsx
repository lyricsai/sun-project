import FriendsPageContainer from './FriendsPage/FriendsPageContainer'
import Nav from './Nav/Nav'
import './Sidebar.scss'

const Sidebar = () => {
    return (

        <aside className='sidebar'>
            <Nav />
            <FriendsPageContainer />
        </aside>
    )
}

export default Sidebar