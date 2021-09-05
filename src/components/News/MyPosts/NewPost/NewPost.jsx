import './NewPost.scss'

const NewPost = () => {
    return (
        <div className="newPost">
            {/* <h4>New Post</h4> */}
            <textarea name="" id="" cols="60" rows="5" className="newPost__input" placeholder="Type something..." ></textarea>
            <button type="button" value="Post It" className='newPost__button' >Post It</button>




        </div>
    )
}


export default NewPost