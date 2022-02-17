import './Contacts.scss';
import Instagram from './Instagram/Instagram';


const Contacts = () => {
    return (

        <section>
            <h2>Contacts</h2>
            <h3 className='contacts'>You can find me <a href="https://instagram.com/lyricsai.art">on Insta</a></h3>
            <Instagram />
        </section>

    )
}

export default Contacts