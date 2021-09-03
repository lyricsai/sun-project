import './SchoolLocation.scss'

const SchoolLocation = () => {

    const src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d304.1063343158416!2d31.0147933576374!3d52.42750331606734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22a56a960944a5a3!2z0KHRgtGD0LTQuNGPINCa0LvRjtGH!5e0!3m2!1sen!2sby!4v1630656807286!5m2!1sen!2sby'

    return (
        <div className="map">
            <div className="googleMap">
                <iframe src={src}
                    width="400"
                    height="300"
                    allowfullscreen=""
                    loading="lazy" >
                </iframe>
            </div>
        </div>
    )


}
export default SchoolLocation
