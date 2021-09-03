import styles from './Dialogs.module.scss'
import DialogMessage from './DialogMessage/DialogMessage'
import DialogItem from './DialogItem/DialogItem'


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.state.messagesData.map(message => <DialogMessage message={message.message} id={message.id} />)

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