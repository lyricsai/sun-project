import Burger from './Nav/Burger/Burger'
import Nav from './Nav/Nav'
import './Sidebar.scss'
import PropTypes from 'prop-types'

const Sidebar = ({ menuOpen, toggleMenu }) => {

    let display
    menuOpen ? display = '_active' : display = ''

    return (

        <div onClick={toggleMenu}>
            <Burger toggleMenu={toggleMenu} isOpen={menuOpen} />
            <aside className={`sidebar ${display}`}  >
                <Nav />
            </aside>
        </div>
    )
}

Sidebar.propTypes = {
    toggleMenu: PropTypes.func,
    menuOpen: PropTypes.bool
}

export default Sidebar