import { combineReducers, createStore } from 'redux'

import newsPageReducer from './newsPageReducer';
import artworksReducer from './artworksReducer';

let reducers = combineReducers({
    newsPage: newsPageReducer,
    artworks: artworksReducer,
})

let store = createStore(reducers)

window.store = store

export default store