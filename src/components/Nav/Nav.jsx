import classes from './Nav.module.scss';


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="google.com" className={classes.nav__item}>Profile</a></li>
                <li><a href="google.com" className={classes.nav__item}>News</a></li>
                <li><a href="google.com" className={classes.nav__item}>Artworks</a></li>
                <li><a href="google.com" className={classes.nav__item}>Art School</a></li>
                <li><a href="google.com" className={classes.nav__item}>Sun Project</a></li>
                <li><a href="google.com" className={classes.nav__item}>Contacts</a></li>
            </ul>
        </nav>
    )
}

export default Nav