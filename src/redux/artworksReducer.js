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

let initialState = {
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
        { id: 11, artwork: art11, },
        { id: 12, artwork: art12, },
        { id: 13, artwork: art13, },
        { id: 14, artwork: art14, },
        { id: 15, artwork: art15, },
    ],
}

const artworksReducer = (state = initialState, action) => {


    return state
}

export default artworksReducer