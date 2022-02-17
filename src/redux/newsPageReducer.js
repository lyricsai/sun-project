const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

let initialState = {
    postsData: [
        { id: 1, message: "I am on my way to become an artist", time: "a year ago" },
        { id: 2, message: "My credo is bringing a joy into the world through my art", time: "6 months ago" },
        { id: 3, message: "Being in hiatus with my art means for me consolidating emotions to explode them into new stage of creativity", time: "2 weeks ago" },
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
                        time: stateCopy.time,
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
