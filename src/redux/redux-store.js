import { combineReducers, createStore } from 'redux'

import newsPageReducer from './newsPageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import artworksReducer from './artworksReducer';
import usersPageReducer from './usersPageReducer';
import profilePageReducer from './profilePageReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    newsPage: newsPageReducer,
    dialogsPage: dialogsPageReducer,
    artworks: artworksReducer,
    usersPage: usersPageReducer,
    profilePage: profilePageReducer,
    auth: authReducer,
})

let store = createStore(reducers)

window.store = store

export default store