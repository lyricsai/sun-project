import styles from './../Dialogs.module.scss'
import React from 'react'

import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/dialogsPageReducer'

const NewMessage = (props) => {

    let addMessage = () => {

        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (event) => {

        let text = event.target.value
        props.dispatch(updateMessageTextActionCreator(text))

    }

    return (
        <div className={styles.newMessage}>
            <div className={styles.dialog__message}>
                <textarea

                    name=""
                    cols="50" rows="2"
                    className="newMessage__input"
                    placeholder="Type something..."
                    value={props.newMessageText}
                    onChange={onMessageChange}  >

                </textarea>
            </div>
            <button type="button" value="Send"
                className={styles.newMessage__button}
                onClick={addMessage}>Send</button>
        </div>
    )
}


export default NewMessage