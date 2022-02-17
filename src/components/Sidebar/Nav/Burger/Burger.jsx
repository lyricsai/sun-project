import PropTypes from 'prop-types'
import './Burger.scss'

const Burger = ({ toggleMenu, isOpen }) => {

    let toggle
    isOpen ? toggle = '_active' : toggle = null
    console.log(toggle)

    return (
        <div className='menu_container'>
            <button className={`${toggle} icon_menu`} id='icon_menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}

Burger.propTypes = {
    toggleMenu: PropTypes.func,
    isOpen: PropTypes.bool
}

export default Burger