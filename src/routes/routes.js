import AboutMe from '../components/AboutMe/AboutMe'
import News from '../components/News/News'
import Artworks from '../components/Artworks/Artworks'
import Contacts from '../components/Contacts/Contacts'
import RootPicture from '../components/RootPicture/RootPicture';

export const routes = [
    { path: "/", Component: RootPicture },
    { path: "/aboutme", Component: AboutMe },
    { path: "/news", Component: News },
    { path: "/artworks", Component: Artworks },
    { path: "/contacts", Component: Contacts },
]