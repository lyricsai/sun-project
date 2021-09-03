
import styles from './FriendItem.module.scss'

const FriendItem = (props) => {
    // let path = '/friends/' + props.id
    return (
        < div className='friendsItem' >
            <div className={styles.friendsAvatarContainer} >
                <img src={props.avatar} alt="avatar" className={styles.friendAvatar} />
            </div>
            <div className={styles.friend__name}>{props.name}</div>
        </ div>
    )
}
export default FriendItem