import MainPicture from './MainPicture/MainPicture';
import Posts from './Posts/Posts';
import InfoUser from './InfoUser/InfoUser';


import './AboutMe.scss';


const AboutMe = (props) => {
    return (
        <main className="main">
            <MainPicture />
            <InfoUser />
            <Posts postsData={props.postsData} />
        </main>

    )
}

export default AboutMe