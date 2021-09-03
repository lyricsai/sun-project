import MainPicture from './MainPicture/MainPicture';
import InfoUser from './InfoUser/InfoUser';


import './AboutMe.scss';


const AboutMe = (props) => {
    return (
        <main className="main">
            <MainPicture />
            <InfoUser />
        </main>

    )
}

export default AboutMe