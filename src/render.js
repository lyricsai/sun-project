import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { addPost, addMessage, updatePostText, updateMessageText } from './redux/state'


export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                addMessage={addMessage}
                updatePostText={updatePostText}
                updateMessageText={updateMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
