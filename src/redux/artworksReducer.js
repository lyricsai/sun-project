import art1 from '../assets/static/artworks/Litvinenka1_29x41.jpg';
import art2 from '../assets/static/artworks/Litvinenka2_40x28.jpg';
import art3 from '../assets/static/artworks/Litvinenka3_14x14.jpg';
import art4 from '../assets/static/artworks/Litvinenka4_14x14.jpg';
import art5 from '../assets/static/artworks/Litvinenka5_24x24.jpg';
import art6 from '../assets/static/artworks/Litvinenka6_24x29.jpg';
import art7 from '../assets/static/artworks/Litvinenka7_21x32.jpg';
import art8 from '../assets/static/artworks/Litvinenka8_23x29.jpg';
import art9 from '../assets/static/artworks/Litvinenka9_19x28.jpg';
import art10 from '../assets/static/artworks/Litvinenka10_28x40.jpg';
import art11 from '../assets/static/artworks/Litvinenka11_22x23.jpg';
import art12 from '../assets/static/artworks/Litvinenka12_28x19.jpg';
import art13 from '../assets/static/artworks/Litvinenka13_18x22.jpg';
import art14 from '../assets/static/artworks/Litvinenka14_19x24.jpg';
import art15 from '../assets/static/artworks/Litvinenka15_19x24.jpg';
import art16 from '../assets/static/artworks/Litvinenka16_19x19.jpg';
import art17 from '../assets/static/artworks/Litvinenka17_21x26.jpg';
import art18 from '../assets/static/artworks/Litvinenka18_19х20.jpg';
import art19 from '../assets/static/artworks/Litvinenka19_30х21.jpg';
import art20 from '../assets/static/artworks/Litvinenka20_22x23.jpg';
import art21 from '../assets/static/artworks/Litvinenka21_19x26.jpg';
import art22 from '../assets/static/artworks/Litvinenka22_20x22.jpg';
import art23 from '../assets/static/artworks/Litvinenka23_24x18.jpg';
import art24 from '../assets/static/artworks/Litvinenka45_24x19.jpg';
import art25 from '../assets/static/artworks/Litvinenka25_24x24.jpg';
import art26 from '../assets/static/artworks/Litvinenka26_29x19.jpg';
import art27 from '../assets/static/artworks/Litvinenka27_29x22.jpg';
import art28 from '../assets/static/artworks/Litvinenka28_19x24.jpg';
import art29 from '../assets/static/artworks/Litvinenka29_15x23.jpg';
import art30 from '../assets/static/artworks/Litvinenka30_28x18.jpg';
import art31 from '../assets/static/artworks/Litvinenka31_21x16.jpg';
import art32 from '../assets/static/artworks/Litvinenka32_24x19.jpg';
import art33 from '../assets/static/artworks/Litvinenka33_18x18.jpg';
import art34 from '../assets/static/artworks/Litvinenka34_26x20.jpg';
import art35 from '../assets/static/artworks/Litvinenka35_28x28.jpg';

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
        { id: 28, url: art28, caption: '' },
        { id: 29, url: art29, caption: '' },
        { id: 30, url: art30, caption: '' },
        { id: 31, url: art31, caption: '' },
        { id: 32, url: art32, caption: '' },
        { id: 33, url: art33, caption: '' },
        { id: 34, url: art34, caption: '' },
        { id: 35, url: art35, caption: '' },
    ],
}

const artworksReducer = (state = initialState, { type }) => {
    switch (type) {
        default: return state
    }
}

export default artworksReducer