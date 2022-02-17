import { Fragment } from 'react'
import './ModalSlide.scss'
import ReactDOM from 'react-dom'

const ModalSlide = ({ isShowing, hide, slide }) => isShowing

    ? ReactDOM.createPortal(
        <Fragment>
            <div className="modal-overlay" />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal" onClick={hide} >
                    <div><img src={slide.url} alt="art" /></div>
                </div>
            </div>
        </Fragment>, document.body
    )
    : null

export default ModalSlide