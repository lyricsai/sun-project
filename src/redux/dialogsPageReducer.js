const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

let initialState = {
    messagesData: [
        { id: 1, message: "Hey, your new artwork is awesome!!!" },
        { id: 2, message: "Is it available for a sale?" },
        { id: 3, message: "haha" },
        { id: 4, message: "thank you" },
        { id: 5, message: "What about delivery?" },
    ],
    dialogsData: [
        { avatar: 'https://i.pinimg.com/736x/07/8f/f2/078ff215ee244b5f24ca8a71a8e358b3.jpg', id: 1, name: "Anastasiya" },
        { avatar: 'https://www.teahub.io/photos/full/76-768446_nice-pic-hd-download.jpg', id: 2, name: "Jannet", },
        { avatar: 'https://thumbs.dreamstime.com/b/baltic-see-very-nice-pic-klaip%C4%97da-176842928.jpg', id: 3, name: "Inna" },
        { avatar: 'https://images.pexels.com/photos/1486844/pexels-photo-1486844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 4, name: "Valentina" },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP60_0QRknzoqSRgcBm7kYCv1xdOOrkZxDYQ&usqp=CAU', id: 5, name: "Olga" },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vQ01SZk7zVEqk-ZSdsBuou75rB1Xao3QQg&usqp=CAU', id: 6, name: "Oreshechko" },
    ],
    newMessageText: "Let's type something here...",
}

const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:

            if (state.newMessageText) {
                let newMessage = {
                    id: 0,
                    message: state.newMessageText,
                }

                state.messagesData.push(newMessage)
                state.newMessageText = ''

            }

            return state

        case UPDATE_MESSAGE_TEXT:

            state.newMessageText = action.newText

            return state

        default:

            return state
    }

}


export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,

})

export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsPageReducer