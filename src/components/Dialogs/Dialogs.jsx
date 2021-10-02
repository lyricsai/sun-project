import styles from './Dialogs.module.scss'
import NewMessageContainer from './NewMessage/NewMessageContainer'

const Dialogs = (props) => {

    return (
        <section className={styles.dialogs}>
            <h2 className={styles.dialogs__title}>Dialogs</h2>
            <div className={styles.dialogs__display}>
                <div className={styles.dialogs__items} >
                    {props.dialogsElements}
                </div>
                <div className={styles.dialog__messages}>
                    {props.messagesElements}
                    <NewMessageContainer />
                </div>
            </div>
        </section>
    )
}

export default Dialogs