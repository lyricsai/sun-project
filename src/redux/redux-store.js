import { combineReducers, createStore } from 'redux'

import newsPageReducer from './newsPageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import artworksReducer from './artworksReducer';
import friendsPageReducer from './friendsPageReducer';

let reducers = combineReducers({
    newsPage: newsPageReducer,
    dialogsPage: dialogsPageReducer,
    artworks: artworksReducer,
    friendsPage: friendsPageReducer,
})

let store = createStore(reducers)

window.store = store

export default store