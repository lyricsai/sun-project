import monkey from './../images/monkey.jpg';

const Profile = () => {
    return (
        <main className="main">
            <div className="main__image-container-01">
                <img src={monkey} alt="monkey" className="main__image-01" /></div>
            <div className="main__image-container-02">
                <img src='https://i.pinimg.com/736x/07/8f/f2/078ff215ee244b5f24ca8a71a8e358b3.jpg' alt="face" className="main__image-02" /></div>
        </main>
    )
}

export default Profile