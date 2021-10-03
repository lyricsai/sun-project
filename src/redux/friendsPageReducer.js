// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    friendsData: [
        { avatar: 'https://www.teahub.io/photos/full/76-768446_nice-pic-hd-download.jpg', id: 2, name: "Jannet", },
        { avatar: 'https://thumbs.dreamstime.com/b/baltic-see-very-nice-pic-klaip%C4%97da-176842928.jpg', id: 3, name: "Inna" },
        { avatar: 'https://images.pexels.com/photos/1486844/pexels-photo-1486844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 4, name: "Valentina" },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP60_0QRknzoqSRgcBm7kYCv1xdOOrkZxDYQ&usqp=CAU', id: 5, name: "Olga" },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vQ01SZk7zVEqk-ZSdsBuou75rB1Xao3QQg&usqp=CAU', id: 6, name: "Antanina" },
    ],
    usersData: [
        { id: 1, firstName: 'Anastasiya', lastName: 'Litvinenka', following: true, location: { city: 'Gomel', country: 'Belarus' }, status: 'Studying React for Front-End Development', avatar: 'url' },
        { id: 2, firstName: 'Jannet', lastName: 'Sluzhenko', following: true, location: { city: 'Gomel', country: 'Belarus' }, status: 'Drawing dramatic stories', avatar: 'url' },
        { id: 3, firstName: 'Inna', lastName: '', following: true, location: { city: 'Gomel', country: 'Belarus' }, status: 'From economics to comics', avatar: 'url' },
        { id: 4, firstName: 'Valentina', lastName: '', following: true, location: { city: 'Gomel', country: 'Belarus' }, status: 'Drawing with kindergardeners', avatar: 'url' },
        { id: 5, firstName: 'Olga', lastName: 'Hurshchankova', following: false, location: { city: 'Gomel', country: 'Belarus' }, status: 'Hiding in Stomatology', avatar: 'url' },
        { id: 6, firstName: 'Antanina', lastName: 'Areshachka', following: true, location: { city: 'Gomel', country: 'Belarus' }, status: 'Living on the clouds', avatar: 'url' },
    ]
}

const friendsPageReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        // case FOLLOW:
        //     return {
        //         ...state,
        //         friendsData: [...state.friendsData],
        //         usersData: state.usersData.map(u => {
        //             if (u.id === action.userId) {
        //                 return { ...u, following: true }
        //             }
        //             return u
        //         }),
        //     }
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         friendsData: [...state.friendsData],
        //         usersData: state.usersData.map(u => {
        //             if (u.id === action.userId) {
        //                 return { ...u, following: false }
        //             }
        //             return u
        //         }),
        //     }

        case TOGGLE_FOLLOW:
            return {
                ...state,
                friendsData: [...state.friendsData],
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, following: !u.following }
                    }
                    return u
                }),
            }

        case SET_USERS:
            return {
                ...state,
                usersData: [...state.usersData, action.usersData],
                // usersData.location:{ city: action.city, country: action.country}
            }


        default: return state
    }
}

// export const followActionCreator = (userID) => { return { type: FOLLOW, userID } }
// export const unfollowActionCreator = (userID) => { return { type: UNFOLLOW, userID } }
export const toggleFollowActionCreator = (userID) => { return { type: TOGGLE_FOLLOW, userID } }
export const setUsersActionCreator = (usersData) => { return { type: SET_USERS, usersData } }


export default friendsPageReducer