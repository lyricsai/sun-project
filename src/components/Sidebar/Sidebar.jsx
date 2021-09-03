import FriendsPage from './FriendsPage/FriendsPage'
import Nav from './Nav/Nav'
import './Sidebar.scss'

const Sidebar = (props) => {
    return (

        <aside className='sidebar'>
            <Nav />
            <FriendsPage state={props.state} />
        </aside>
    )
}

export default Sidebar