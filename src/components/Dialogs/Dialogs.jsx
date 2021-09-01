import styles from './Dialogs.module.scss'
import DialogMessage from './DialogMessage/DialogMessage'
import DialogItem from './DialogItem/DialogItem'


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

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = messagesData.map(message => <DialogMessage message={message.message} id={message.id} />)

    return (
        <section className={styles.dialogs}>
            <h2 className={styles.dialogs__title}>Dialogs</h2>
            <div className={styles.dialogs__display}>
                <div className='dialogs__items'>
                    {dialogsElements}
                </div>
                <div className={styles.dialog__messages}>
                    {messagesElements}
                </div>
            </div>
        </section>
    )
}

export default Dialogs