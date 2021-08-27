import classes from './Nav.module.scss';


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="/profile" className={classes.nav__item}>Profile</a></li>
                <li><a href="/dialogs" className={classes.nav__item}>News</a></li>
                <li><a href="/artworks" className={classes.nav__item}>Artworks</a></li>
                <li><a href="/artschool" className={classes.nav__item}>Art School</a></li>
                <li><a href="/sunproject" className={classes.nav__item}>Sun Project</a></li>
                <li><a href="/contacts" className={classes.nav__item}>Contacts</a></li>
            </ul>
        </nav>
    )
}

export default Nav