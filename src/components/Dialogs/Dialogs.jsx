import styles from './Dialogs.module.scss'
import DialogMessage from './DialogMessage/DialogMessage'
import DialogItem from './DialogItem/DialogItem'
import NewMessage from './NewMessage/NewMessage'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
    let messagesElements = props.state.messagesData.map(message => <DialogMessage message={message.message} id={message.id} />)

    return (
        <section className={styles.dialogs}>
            <h2 className={styles.dialogs__title}>Dialogs</h2>
            <div className={styles.dialogs__display}>
                <div className={styles.dialogs__items}>
                    {dialogsElements}
                </div>
                <div className={styles.dialog__messages}>
                    {messagesElements}
                    <NewMessage
                        addMessage={props.addMessage}
                        updateMessageText={props.updateMessageText}
                        newMessageText={props.state.newMessageText}
                    />
                </div>
            </div>
        </section>
    )
}

export default Dialogs