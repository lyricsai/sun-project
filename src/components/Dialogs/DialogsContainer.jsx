import DialogMessage from './DialogMessage/DialogMessage'
import DialogItem from './DialogItem/DialogItem'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {

    return {
        dialogsElements: state.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />),
        messagesElements: state.dialogsPage.messagesData.map(message => <DialogMessage message={message.message} id={message.id} />)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer