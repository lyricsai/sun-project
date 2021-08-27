import monkey from '../../images/monkey.jpg';
import Posts from './Posts/Posts';
import InfoUser from './InfoUser/InfoUser';

import './Profile.scss';

const Profile = () => {
    return (
        <main className="main">
            <div className="main__image-container-01">
                <img src={monkey} alt="monkey" className="main__image-01" />
            </div>
            <InfoUser />
            <Posts />
        </main>

    )
}

export default Profile