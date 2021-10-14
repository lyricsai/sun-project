import './App.css';
import { BrowserRouter, Route, } from "react-router-dom";
import { Provider } from 'react-redux'

import HeaderContainer from './components/Header/HeaderContainer'
import AboutMe from './components/AboutMe/AboutMe'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import Artworks from './components/Artworks/Artworks'
import ArtSchool from './components/ArtSchool/ArtSchool'
import Contacts from './components/Contacts/Contacts'
import SunProject from './components/SunProject/SunProject'
import RootPicture from './components/RootPicture/RootPicture';
import Sidebar from './components/Sidebar/Sidebar';
// import Canvas from './components/Canvas/Canvas';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>

        <div className="app__wrapper">

          <HeaderContainer />
          <Sidebar />

          <div className="app__wrapper_content">
            <Route exact path="/" component={RootPicture} />
            <Route path="/aboutme" render={(() => <AboutMe />)} />
            <Route path="/news" render={(() => <News />)} />
            <Route path="/artworks" render={(() => <Artworks />)} />
            <Route path="/artschool" render={(() => <ArtSchool />)} />
            <Route path="/sunproject" render={(() => <SunProject />)} />
            <Route path="/users" render={(() => <UsersContainer />)} />
            <Route path="/profile/:userId?" render={(() => <ProfileContainer />)} />
            <Route path="/contacts" component={Contacts} />
            {/* <Route path="/canvas" render={(() => <Canvas />)} /> */}
            <Route path="/dialogs" render={(() => <DialogsContainer />)} />
          </div>

          <Footer />

        </div>

      </Provider>
    </BrowserRouter >
  );
}




export default App;
