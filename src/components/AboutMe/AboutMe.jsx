import MainPicture from './MainPicture/MainPicture';
import MyInfo from './MyInfo/MyInfo';


import './AboutMe.scss';


const AboutMe = (props) => {
    return (
        <main className="main">
            <MainPicture />
            <MyInfo />
        </main>

    )
}

export default AboutMe