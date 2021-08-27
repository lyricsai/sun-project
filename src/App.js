// import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
      <footer className="footer"></footer>
    </div>
  );
}







export default App;
