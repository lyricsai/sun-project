import styles from './../Dialogs.module.scss'
import React from 'react'


const NewMessage = (props) => {

    let newMessageElement = React.createRef()


    let addMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }
    return (
        <div className={styles.newMessage}>
            <div className={styles.dialog__message}>
                <textarea name="" ref={newMessageElement} cols="50" rows="2" className="newMessage__input" placeholder="Type something..." ></textarea>
            </div>
            <button type="button" value="Send" className={styles.newMessage__button} onClick={addMessage}>Send</button>

        </div>
    )
}


export default NewMessage