import styles from './FriendItem.module.scss'

const FriendItem = (props) => {

    return (
        < div className={styles.friendsItem} >
            <div className={styles.friendsAvatarContainer} >
                <img src={props.avatar} alt="avatar" className={styles.friendAvatar} title={props.name} />
            </div>
            <div className={styles.friend__name}>{props.name}</div>
        </ div>

    )
}
export default FriendItem