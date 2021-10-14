import './Header.scss';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="header">
            <a href='/' className="header__logo">Anastasiya Litvinenka</a>
            <span className="header__login_block">
                {props.isAuth ? props.login : <NavLink to={'/login '}>login</NavLink >}

            </span>
        </header>
    )
}

export default Header;