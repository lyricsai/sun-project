import styles from './FriendItem.module.scss'

const FriendItem = (props) => {

    return (
        < div className={styles.friendsItem} >
            <div className={styles.friendsAvatarContainer} >
                <img src={props.avatar} alt="avatar" className={styles.friendAvatar} title={props.name} />
            </div>
            <button type="button" value="Send"
                className={styles.newMessage__button}
                onClick={props.followUser}>Follow</button>
            {/* <div className={styles.friend__name}>{props.name}</div> */}
        </ div>

    )
}
export default FriendItem