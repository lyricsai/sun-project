const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    friendsData: [
        { avatar: 'https://www.teahub.io/photos/full/7-78322_1000-gambar-kartun-wanita-muslimah-cantik-dan-lucu.jpg', id: 2, name: "Jannet", },
        { avatar: 'https://thumbs.dreamstime.com/b/baltic-see-very-nice-pic-klaip%C4%97da-176842928.jpg', id: 3, name: "Inna" },
        { avatar: 'https://images.pexels.com/photos/1486844/pexels-photo-1486844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 4, name: "Valentina" },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP60_0QRknzoqSRgcBm7kYCv1xdOOrkZxDYQ&usqp=CAU', id: 5, name: "Olga" },
        { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vQ01SZk7zVEqk-ZSdsBuou75rB1Xao3QQg&usqp=CAU', id: 6, name: "Antanina" },
    ],
    usersData:
        [
            // { id: 1, firstName: 'Anastasiya', lastName: 'Litvinenka', followed: false, location: { city: 'Gomel', country: 'Belarus' }, status: 'Studying React for Front-End Development', avatar: 'url' },
            // { id: 2, firstName: 'Jannet', lastName: 'Sluzhenko', followed: true, location: { city: 'Gomel', country: 'Belarus' }, status: 'Drawing dramatic stories', avatar: 'url' },
            // { id: 3, firstName: 'Inna', lastName: '', followed: true, location: { city: 'Gomel', country: 'Belarus' }, status: 'From economics to comics', avatar: 'url' },
            // { id: 4, firstName: 'Valentina', lastName: '', followed: true, location: { city: 'Gomel', country: 'Belarus' }, status: 'Drawing with kindergardeners', avatar: 'url' },
            // { id: 5, firstName: 'Olga', lastName: 'Hurshchankova', followed: false, location: { city: 'Gomel', country: 'Belarus' }, status: 'Hiding in Stomatology', avatar: 'url' },
            // { id: 6, firstName: 'Antanina', lastName: 'Areshachka', followed: true, location: { city: 'Gomel', country: 'Belarus' }, status: 'Living on the clouds', avatar: 'url' },
        ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    profile: null,
}

const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                friendsData: [...state.friendsData],
                // usersData: [...state.usersData],
                usersData: state.usersData
                    .map(u => ((u.id === action.userId) ? { ...u, followed: true } : u)),
            }

        case UN_FOLLOW:
            return {
                ...state,
                friendsData: [...state.friendsData],
                usersData: state.usersData
                    .map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false }
                        }
                        return u
                    }),
            }

        case SET_USERS:
            return {
                ...state,
                usersData: action.usersData,
                // usersData.location:{ city: action.city, country: action.country}
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }

        case TOGGLE_IS_FETCHING:

            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_PROFILE:

            return {
                ...state,
                profile: action.profile
            }

        default: return state
    }
}

export const follow = (userId) => { return { type: FOLLOW, userId } }
export const unFollow = (userId) => { return { type: UN_FOLLOW, userId } }
export const setUsers = (usersData) => { return { type: SET_USERS, usersData } }
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } }
export const setTotalUsersCount = (totalUsersCount) => { return { type: SET_TOTAL_USERS_COUNT, totalUsersCount } }
export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } }
export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } }


export default usersPageReducer