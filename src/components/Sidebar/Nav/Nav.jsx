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
                <li><NavLink to="/dialogs" className={classes.nav__item}>Dialogs</NavLink></li>
                <li><NavLink to="/users" className={classes.nav__item}>Users</NavLink></li>
                {/* <li><NavLink to="/canvas" className={classes.nav__item}>Canvas</NavLink></li> */}
            </ul>

        </nav >
    )
}

export default Nav