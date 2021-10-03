const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

let initialState = {
    postsData: [
        { id: 1, message: "Long Ago", likesCounter: 11 },
        { id: 2, message: "Before", likesCounter: 3 },
        { id: 3, message: "Last one", likesCounter: 2 },
    ],
    newPostText: 'BlackPink in your area!..',
}

const newsPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let stateCopy = {
                ...state,
            }
            if (stateCopy.newPostText) {

                let postsNumber = Object.keys(stateCopy.postsData).length

                stateCopy = {
                    ...state,
                    postsData: [...state.postsData,
                    {
                        id: postsNumber + 1,
                        message: stateCopy.newPostText,
                        likesCounter: 0,
                    }],
                    newPostText: '',
                }
            }

            return stateCopy

        case UPDATE_POST_TEXT:

            return {
                ...state,
                newPostText: action.newText
            }

        default: return state

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text,
    }
}

export default newsPageReducer
