import monkey from '../../images/monkey.jpg';
import Posts from './Posts/Posts';
import InfoUser from './InfoUser/InfoUser';

import './AboutMe.scss';

const MainPicture = () => {
    return (
        <div className="main__image-container-01">
            <img src={monkey} alt="monkey" className="main__image-01" />
        </div>
    )
}

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