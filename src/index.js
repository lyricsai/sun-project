import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: "Anastasiya" },
  { id: 2, name: "Jannet" },
  { id: 3, name: "Inna" },
  { id: 4, name: "Valentina" },
  { id: 5, name: "Olga" },
  { id: 6, name: "Oreshechko" },
]

let messagesData = [
  { id: 1, message: "Hey, your new artwork is awesome!!!" },
  { id: 2, message: "Is it available for a sale?" },
  { id: 3, message: "haha" },
  { id: 4, message: "thank you" },
  { id: 5, message: "What about delivery?" },
]

let postsData = [
  { id: 1, message: "Last one", likesCounter: 2 },
  { id: 2, message: "Before", likesCounter: 3 },
  { id: 3, message: "Long Ago", likesCounter: 11 },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//DATA


