import Nav from './Nav/Nav'
import './Sidebar.scss'

const Sidebar = (props) => {
    return (

        <aside className='sidebar'>
            <Nav />
            <div className="sidebar__friends">
                Avatar+friends.name
            </div>
        </aside>
    )
}

export default Sidebar