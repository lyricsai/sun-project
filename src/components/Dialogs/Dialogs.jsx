import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.scss'

const Dialogs = () => {
    return (

        <section className={styles.dialogs}>
            <h2 className={styles.dialogs__title}>Dialogs</h2>
            <div className={styles.dialogs__display}>
                <div className='dialogs__items'>
                    <NavLink to='/dialogs/Anastasiya' className={styles.dialogs__dialog + " " + styles.active}>Anastasiya</NavLink>
                    <NavLink to='/dialogs/Jannet' className={styles.dialogs__dialog}>Jannet</NavLink>
                    <NavLink to='/dialogs/Inna' className={styles.dialogs__dialog}>Inna</NavLink>
                    <NavLink to='/dialogs/Valentina' className={styles.dialogs__dialog}>Valentina</NavLink>
                    <NavLink to='/dialogs/Olga' className={styles.dialogs__dialog}>Olga</NavLink>
                    <NavLink to='/dialogs/Oreshechko' className={styles.dialogs__dialog}>Oreshechko</NavLink>
                </div>
                <div className={styles.dialog__messages}>
                    <div className={styles.dialog__message}>Hey, your new artwork is awesome!!!</div>
                    <div className={styles.dialog__message}>Is it available for a sale?</div>
                    <div className={styles.dialog__message}>What about delivery?</div>
                </div>
            </div>
        </section>

    )
}

export default Dialogs