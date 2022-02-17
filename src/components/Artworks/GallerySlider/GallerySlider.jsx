import React from "react"
import classNames from "classnames"
import Slide from "./Slide/Slide";


class GallerySlider extends React.Component {
    constructor(props) {
        super(props);

        this.IMAGE_PARTS = 4;

        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;

        this.state = {

            activeSlide: -1,
            prevSlide: -1,
            sliderReady: false,
            pause: false
        };
    }

    componentWillUnmount() {
        window.clearTimeout(this.changeTO);
    }

    componentDidMount() {
        this.runAutochangeTO();
        setTimeout(() => {
            this.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
    }

    runAutochangeTO() {
        this.changeTO = setTimeout(() => {
            this.changeSlides(1);
            this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
    }

    changeSlides(change) {
        window.clearTimeout(this.changeTO);
        const { length } = this.props.slides;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide });
    }

    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state

        return (
            <div className={classNames('slider', { 's--ready': sliderReady })}>
                <div className="slider__slides">

                    {this.props.slides.map((slide, index) => (
                        <Slide
                            slide={slide}
                            index={index}
                            activeSlide={activeSlide}
                            prevSlide={prevSlide}
                            parts={this.IMAGE_PARTS}
                            pause={this.pause}
                        />
                    ))}
                </div>
                <div className="slider__control" onClick={() => this.changeSlides(-1)} />
                <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />

            </div>
        );
    }
}


export default GallerySlider
