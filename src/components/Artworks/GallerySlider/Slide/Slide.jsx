import classNames from 'classnames'
import ModalSlide from "../../ModalSlide/ModalSlide";
import useModal from "../../../useModal/UseModal"
import { Fragment } from "react"
import PropTypes from 'prop-types'

const Slide = ({ activeSlide, prevSlide, slide, index, parts }) => {

    const { isShowing, toggle } = useModal()

    return (
        <Fragment>
            <div className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                key={slide.id}
                onClick={toggle}>
                <div className="slider__slide-content">
                    <h3 className="slider__slide-subheading">{slide.caption}</h3>
                    <h2 className="slider__slide-heading">
                        {slide.caption.split('').map(item => <span key={item.id}>{item}</span>)}
                    </h2>
                    <p className="slider__slide-look">{ }</p>
                </div>
                <div className="slider__slide-parts">
                    {[...Array(parts).fill()].map((x, i) =>
                        <div className="slider__slide-part" key={i}>
                            <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.url})` }} />
                        </div>
                    )}
                </div>
                <ModalSlide slide={slide} isShowing={isShowing} hide={toggle} />
            </div>
        </Fragment>
    )
}

Slide.propTypes = {
    activeSlide: PropTypes.number,
    prevSlide: PropTypes.number,
    slide: PropTypes.object,
    index: PropTypes.number,
    parts: PropTypes.number

}


export default Slide