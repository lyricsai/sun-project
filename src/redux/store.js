import art1 from './../images/artworks/Litvinenka1_29x41.jpg';
import art2 from './../images/artworks/Litvinenka2_40x28.jpg';
import art3 from './../images/artworks/Litvinenka3_14x14.jpg';
import art4 from './../images/artworks/Litvinenka4_14x14.jpg';
import art5 from './../images/artworks/Litvinenka5_24x24.jpg';
import art6 from './../images/artworks/Litvinenka6_24x29.jpg';
import art7 from './../images/artworks/Litvinenka7_21x32.jpg';
import art8 from './../images/artworks/Litvinenka8_23x29.jpg';
import art9 from './../images/artworks/Litvinenka9_19x28.jpg';
import art10 from './../images/artworks/Litvinenka10_28x40.jpg';
import art11 from './../images/artworks/Litvinenka11_22x23.jpg';
import art12 from './../images/artworks/Litvinenka12_28x19.jpg';
import art13 from './../images/artworks/Litvinenka13_18x22.jpg';
import art14 from './../images/artworks/Litvinenka14_19x24.jpg';
import art15 from './../images/artworks/Litvinenka15_19x24.jpg';
import newsPageReducer from './newsPageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import artworksReducer from './artworksReducer';
import sidebarReducer from './sidebarReducer';

let store = {
    _state: {
        dialogsPage: {
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
        },
        newsPage: {
            postsData: [
                { id: 1, message: "Long Ago", likesCounter: 11 },
                { id: 2, message: "Before", likesCounter: 3 },
                { id: 3, message: "Last one", likesCounter: 2 },
            ],
            newPostText: 'BlackPink in your area!',
        },
        sidebar: {
            friendsData: [
                { avatar: 'https://www.teahub.io/photos/full/76-768446_nice-pic-hd-download.jpg', id: 2, name: "Jannet", },
                { avatar: 'https://thumbs.dreamstime.com/b/baltic-see-very-nice-pic-klaip%C4%97da-176842928.jpg', id: 3, name: "Inna" },
                { avatar: 'https://images.pexels.com/photos/1486844/pexels-photo-1486844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 4, name: "Valentina" },
                { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP60_0QRknzoqSRgcBm7kYCv1xdOOrkZxDYQ&usqp=CAU', id: 5, name: "Olga" },
                { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vQ01SZk7zVEqk-ZSdsBuou75rB1Xao3QQg&usqp=CAU', id: 6, name: "Oreshechko" },],
        },
        artworks: [
            { id: 1, artwork: art1, },
            { id: 2, artwork: art2, },
            { id: 3, artwork: art3, },
            { id: 4, artwork: art4, },
            { id: 5, artwork: art5, },
            { id: 6, artwork: art6, },
            { id: 7, artwork: art7, },
            { id: 8, artwork: art8, },
            { id: 9, artwork: art9, },
            { id: 10, artwork: art10, },
            { id: 10, artwork: art11, },
        ],

    },

    _callSubscriber() {
        console.log('state has changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.newsPage = newsPageReducer(this._state.newsPage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._state.artworks = artworksReducer(this._state.artworks, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()


    }

}


export default store

window.store = store