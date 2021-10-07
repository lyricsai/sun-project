import './MyInfo.scss';
import MyProfile from './MyProfile/MyProfile'
import MyAvatar from './MyAvatar/MyAvatar'



const MyInfo = () => {
    return (
        <div className='main__about about'>
            <MyAvatar />
            <MyProfile />
        </div>
    )
}

export default MyInfo
