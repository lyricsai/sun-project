import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    <React.StrictMode>
        <App
            store={store}
        />
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals();


//DATA


