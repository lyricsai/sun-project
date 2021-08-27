import { NavLink } from 'react-router-dom';
import classes from './Nav.module.scss';


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/aboutme" className={classes.nav__item}>AboutMe</NavLink></li>
                <li><NavLink to="/news" className={classes.nav__item}>News</NavLink></li>
                <li><NavLink to="/artworks" className={classes.nav__item}>Artworks</NavLink></li>
                <li><NavLink to="/artschool" className={classes.nav__item}>Art School</NavLink></li>
                <li><NavLink to="/sunproject" className={classes.nav__item}>Sun Project</NavLink></li>
                <li><NavLink to="/contacts" className={classes.nav__item}>Contacts</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav