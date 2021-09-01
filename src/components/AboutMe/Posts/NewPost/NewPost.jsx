import './NewPost.scss'

const NewPost = () => {
    return (
        <div className="posts__new">
            <h4>New Post</h4>
            <input autocomplete="off" type="textarea" name="form[]" className="posts__input" placeholder="Type something..." />
            <input type="button" value="Post It" className='input__button' />

        </div>
    )
}


export default NewPost