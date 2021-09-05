import styles from './../Dialogs.module.scss'


const DialogMessage = (props) => {


    return (
        <div className={styles.dialog__message}>{props.message}</div>
    )
}


export default DialogMessage