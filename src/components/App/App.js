import './App.css';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import HeaderContainer from '../Header/HeaderContainer'

import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react'
import AppRoutes from '../AppRoutes/AppRoutes';

const App = ({ store }) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => { setMenuOpen(!menuOpen) }

  let styles

  menuOpen
    ? styles = { gridTemplateAreas: "sidebar" }
    : styles = {
      gridTemplateAreas: `  "header"  "main"  "footer"`
    }

  return (
    <HashRouter>
      <Provider store={store}>
        <div className="app__wrapper" style={styles}>

          <HeaderContainer />
          <Sidebar toggleMenu={toggleMenu} menuOpen={menuOpen} />

          <div className="app__wrapper_content">

            <AppRoutes />

          </div>
          <Footer />
        </div>

      </Provider>
    </HashRouter >
  )
}

App.propTypes = {
  store: PropTypes.object
}

export default App