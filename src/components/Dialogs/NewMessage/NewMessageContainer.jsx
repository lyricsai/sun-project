import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/dialogsPageReducer'
import NewMessage from './NewMessage'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {

    return {
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer