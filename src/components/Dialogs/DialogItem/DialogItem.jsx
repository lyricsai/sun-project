import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.scss'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        < div className='dialogs__item' >
            <NavLink to={path} className={styles.dialogs__dialog + " " + styles.active}>
                <div className={styles.avatarDialogsContainer} ><img src={props.avatar} alt="avatar" className={styles.avatarDialogs} /></div>
                {props.name}
            </NavLink>
        </ div>
    )
}
export default DialogItem