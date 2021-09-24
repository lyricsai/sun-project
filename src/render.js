import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/state'
import { addPost } from './redux/state'
import { addMessage } from './redux/state'


export let rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
