import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {

    return (
        <header className="header">
            <Link to='/' className="header__logo">Anastasiya Litvinenka</Link>
        </header>
    )
}

export default Header;