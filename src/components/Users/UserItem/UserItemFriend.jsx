import Preloader from '../../common/Preloader/Preloader'
import styles from './UserItem.module.scss'


const UserItemFriend = (props) => {

    if (!props.profile) {
        return
        // <span><Preloader /></span>
    }

    return (
        <div className={styles.friendsItem} >

            <div className={styles.friendsAvatarContainer} >
                <img src={props.avatar} alt="avatar" className={styles.friendAvatar} title={props.name} />
            </div>
            <span>Online</span>

            <div className={styles.friend__name}>{props.name}</div>

        </div>

    )
}
export default UserItemFriend