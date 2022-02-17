import './Post.scss'
import me from '../../../../assets/static/images/me.jpg'
import React from 'react'

const Post = ({ message, time }) => {

    return (
        <div className="post__container">
            <div className="post__entire">
                <img src={me} alt="avatar" className="post__avatar" />
                <div className="post__body">
                    <p className="post__itself">{message}</p>
                </div>
                <span>{time}</span>
            </div>
        </div>
    )
}

export default Post