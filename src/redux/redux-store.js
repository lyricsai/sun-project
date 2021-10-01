import { combineReducers, createStore } from 'redux'

import newsPageReducer from './newsPageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import artworksReducer from './artworksReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers({
    newsPage: newsPageReducer,
    dialogsPage: dialogsPageReducer,
    artworks: artworksReducer,
    sidebar: sidebarReducer,
})

let store = createStore(reducers)


export default store