// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <Nav />
      <div className="app__wrapper_content">
        {/* <Profile /> */}
        <Dialogs />
      </div>
      <Footer />
    </div>
  );
}







export default App;
