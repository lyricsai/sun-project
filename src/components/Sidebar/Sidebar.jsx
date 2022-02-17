import Burger from './Nav/Burger/Burger'
import Nav from './Nav/Nav'
import './Sidebar.scss'

const Sidebar = ({ menuOpen, toggleMenu }) => {

    let display
    menuOpen ? display = '_active' : display = ''

    return (

        <div>
            <Burger toggleMenu={toggleMenu} isOpen={menuOpen} />
            <aside className={`sidebar ${display}`} onClick={toggleMenu} >
                <Nav />
            </aside>
        </div>
    )
}

export default Sidebar