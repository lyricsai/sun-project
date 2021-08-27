import './InfoUser.scss';

const InfoUser = () => {
    return (
        <div className='main__about about'>
            <div className="about__image-container-01">
                <img src='https://i.pinimg.com/736x/07/8f/f2/078ff215ee244b5f24ca8a71a8e358b3.jpg' alt="face" className="about__image-01" />
            </div>
            <div className="about__container">
                <div className="about__user">
                    <h1 className="about__artist">Anastasiya Litvinenka</h1>
                    <p className="about__textInfo">From MD to the Art, and now up for the Front-End!!!</p>
                </div>
            </div>
        </div>
    )
}

export default InfoUser