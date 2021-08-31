import MainPicture from './MainPicture/MainPicture';
import Posts from './Posts/Posts';
import InfoUser from './InfoUser/InfoUser';

import './AboutMe.scss';



const AboutMe = () => {
    return (
        <main className="main">
            <MainPicture />
            <InfoUser />
            <Posts />
        </main>

    )
}

export default AboutMe