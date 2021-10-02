import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/dialogsPageReducer'
import NewMessage from './NewMessage'

const NewMessageContainer = (props) => {

    let addMessage = () => {

        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {

        props.dispatch(updateMessageTextActionCreator(text))

    }

    return (
        <NewMessage addMessage={addMessage} updateMessageText={onMessageChange} newMessageText={props.newMessageText} />
    )
}


export default NewMessageContainer