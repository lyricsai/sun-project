import { combineReducers, createStore } from 'redux'

import newsPageReducer from './newsPageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import artworksReducer from './artworksReducer';
import usersPageReducer from './usersPageReducer';

let reducers = combineReducers({
    newsPage: newsPageReducer,
    dialogsPage: dialogsPageReducer,
    artworks: artworksReducer,
    usersPage: usersPageReducer,
})

let store = createStore(reducers)

window.store = store

export default store