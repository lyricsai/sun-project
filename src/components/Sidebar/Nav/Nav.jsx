import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {

    return (
        <Fragment>
            <nav >
                <ul className="menu" >
                    <li><NavLink to="/aboutme" className="nav__item">AboutMe</NavLink></li>
                    <li><NavLink to="/news" className="nav__item">News</NavLink></li>
                    <li><NavLink to="/artworks" className="nav__item">Artworks</NavLink></li>
                    <li><NavLink to="/contacts" className="nav__item">Contacts</NavLink></li>
                </ul>
            </nav >
        </Fragment>
    )
}

export default Nav