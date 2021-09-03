import './ArtSchool.scss'
import SchoolLocation from './SchoolLocation/SchoolLocation'

const ArtSchool = () => {


    return (
        <section className="artSchool" >
            <h2 className='artSchoolTitle'>Art School 'The Key'</h2>
            <p className='artSchoolText' >The place I've been studying at</p>
            <SchoolLocation />
        </section >
    )
}

export default ArtSchool