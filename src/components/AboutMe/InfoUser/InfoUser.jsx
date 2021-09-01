import './InfoUser.scss';
import UserProfile from './UserProfile/UserProfile'
import UserAvatar from './UserAvatar/UserAvatar'



const InfoUser = () => {
    return (
        <div className='main__about about'>
            <UserAvatar />
            <UserProfile />
        </div>
    )
}

export default InfoUser
