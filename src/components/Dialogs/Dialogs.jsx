import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.scss'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        < div className='dialogs__item' >
            <NavLink to={path} className={styles.dialogs__dialog + " " + styles.active}>{props.name}</NavLink>
        </ div>
    )
}

const DialogMessage = (props) => {
    return (
        <div className={styles.dialog__message}>{props.message}</div>
    )
}


const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: "Anastasiya" },
        { id: 2, name: "Jannet" },
        { id: 3, name: "Inna" },
        { id: 4, name: "Valentina" },
        { id: 5, name: "Olga" },
        { id: 6, name: "Oreshechko" },
    ]

    let messagesData = [
        { id: 1, message: "Hey, your new artwork is awesome!!!" },
        { id: 2, message: "Is it available for a sale?" },
        { id: 3, message: "haha" },
        { id: 4, message: "thank you" },
        { id: 5, message: "What about delivery?" },
    ]


    return (
        <section className={styles.dialogs}>
            <h2 className={styles.dialogs__title}>Dialogs</h2>
            <div className={styles.dialogs__display}>
                <div className='dialogs__items'>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                </div>
                <div className={styles.dialog__messages}>
                    <DialogMessage message={messagesData[0].message} id={dialogsData[0].id} />
                    <DialogMessage message={messagesData[1].message} id={dialogsData[1].id} />
                    <DialogMessage message={messagesData[2].message} id={dialogsData[2].id} />
                    <DialogMessage message={messagesData[3].message} id={dialogsData[3].id} />
                    <DialogMessage message={messagesData[4].message} id={dialogsData[4].id} />
                </div>
            </div>
        </section>
    )
}

export default Dialogs