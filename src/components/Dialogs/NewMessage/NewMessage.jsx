import styles from './../Dialogs.module.scss'
import React from 'react'

import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/state'

const NewMessage = (props) => {

    let newMessageElement = React.createRef()

    let addMessage = () => {

        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {

        let text = newMessageElement.current.value
        let action = updateMessageTextActionCreator(text)
        props.dispatch(action)

    }

    return (
        <div className={styles.newMessage}>
            <div className={styles.dialog__message}>
                <textarea

                    name=""
                    ref={newMessageElement}
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