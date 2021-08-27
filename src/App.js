// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/AboutMe'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import Artworks from './components/Artworks/Artworks'
import ArtSchool from './components/ArtSchool/ArtSchool'
import Contacts from './components/Contacts/Contacts'
import SunProject from './components/SunProject/SunProject'


const App = () => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav />
        <div className="app__wrapper_content">

          <Route path="/aboutme" component={AboutMe} />
          <Route path="/news" component={News} />
          <Route path="/artworks" component={Artworks} />
          <Route path="/artschool" component={ArtSchool} />
          <Route path="/sunproject" component={SunProject} />
          <Route path="/contacts" component={Contacts} />

        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}







export default App;
