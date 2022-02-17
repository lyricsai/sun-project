import art1 from '../images/artworks/Litvinenka1_29x41.jpg';
import art2 from '../images/artworks/Litvinenka2_40x28.jpg';
import art3 from '../images/artworks/Litvinenka3_14x14.jpg';
import art4 from '../images/artworks/Litvinenka4_14x14.jpg';
import art5 from '../images/artworks/Litvinenka5_24x24.jpg';
import art6 from '../images/artworks/Litvinenka6_24x29.jpg';
import art7 from '../images/artworks/Litvinenka7_21x32.jpg';
import art8 from '../images/artworks/Litvinenka8_23x29.jpg';
import art9 from '../images/artworks/Litvinenka9_19x28.jpg';
import art10 from '../images/artworks/Litvinenka10_28x40.jpg';
import art11 from '../images/artworks/Litvinenka11_22x23.jpg';
import art12 from '../images/artworks/Litvinenka12_28x19.jpg';
import art13 from '../images/artworks/Litvinenka13_18x22.jpg';
import art14 from '../images/artworks/Litvinenka14_19x24.jpg';
import art15 from '../images/artworks/Litvinenka15_19x24.jpg';
import art16 from '../images/artworks/Litvinenka16_19x19.jpg';
import art17 from '../images/artworks/Litvinenka17_21x26.jpg';
import art18 from '../images/artworks/Litvinenka18_19х20.jpg';
import art19 from '../images/artworks/Litvinenka19_30х21.jpg';
import art20 from '../images/artworks/Litvinenka20_22x23.jpg';
import art21 from '../images/artworks/Litvinenka21_19x26.jpg';
import art22 from '../images/artworks/Litvinenka22_20x22.jpg';
import art23 from '../images/artworks/Litvinenka23_24x18.jpg';
import art24 from '../images/artworks/Litvinenka45_24x19.jpg';
import art25 from '../images/artworks/Litvinenka25_24x24.jpg';
import art26 from '../images/artworks/Litvinenka26_29x19.jpg';
import art27 from '../images/artworks/Litvinenka27_29x22.jpg';

let initialState = {
    artworks: [
        { id: 1, url: art1, caption: '' },
        { id: 2, url: art2, caption: '' },
        { id: 3, url: art3, caption: '' },
        { id: 4, url: art4, caption: '' },
        { id: 5, url: art5, caption: '' },
        { id: 6, url: art6, caption: '' },
        { id: 7, url: art7, caption: '' },
        { id: 8, url: art8, caption: '' },
        { id: 9, url: art9, caption: '' },
        { id: 10, url: art10, caption: '' },
        { id: 11, url: art11, caption: '' },
        { id: 12, url: art12, caption: '' },
        { id: 13, url: art13, caption: '' },
        { id: 14, url: art14, caption: '' },
        { id: 15, url: art15, caption: '' },
        { id: 16, url: art16, caption: '' },
        { id: 17, url: art17, caption: '' },
        { id: 18, url: art18, caption: '' },
        { id: 19, url: art19, caption: '' },
        { id: 20, url: art20, caption: '' },
        { id: 21, url: art21, caption: '' },
        { id: 22, url: art22, caption: '' },
        { id: 23, url: art23, caption: '' },
        { id: 24, url: art24, caption: '' },
        { id: 25, url: art25, caption: '' },
        { id: 26, url: art26, caption: '' },
        { id: 27, url: art27, caption: '' },
    ],
}

const artworksReducer = (state = initialState, { type }) => {
    switch (type) {
        default: return state
    }
}

export default artworksReducer