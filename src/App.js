import './App.css';
import { BrowserRouter, Route, } from "react-router-dom";
import { Provider } from 'react-redux'

import HeaderContainer from './components/Header/HeaderContainer'
import AboutMe from './components/AboutMe/AboutMe'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import Artworks from './components/Artworks/Artworks'
import Contacts from './components/Contacts/Contacts'
import RootPicture from './components/RootPicture/RootPicture';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react'


const App = ({ store }) => {


  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => { setMenuOpen(!menuOpen) }

  let styles

  menuOpen
    ? styles = { gridTemplateAreas: "sidebar" }
    : styles = {
      gridTemplateAreas: `  "header"  "main"  "footer"`
    }


  console.log(menuOpen)
  return (
    <BrowserRouter>
      <Provider store={store}>

        <div className="app__wrapper" style={styles}>

          <HeaderContainer />
          <Sidebar toggleMenu={toggleMenu} menuOpen={menuOpen} />

          <div className="app__wrapper_content">
            <Route exact path="/" component={RootPicture} />
            <Route path="/aboutme" render={(() => <AboutMe />)} />
            <Route path="/news" render={(() => <News />)} />
            <Route path="/artworks" render={(() => <Artworks />)} />
            <Route path="/contacts" component={Contacts} />
          </div>
          <Footer />


          <style jsx="true">
            {`

`}
          </style>

        </div>

      </Provider>
    </BrowserRouter >
  );
}




export default App;
