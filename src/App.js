import './App.css';
import { BrowserRouter, Route, } from "react-router-dom";


import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import Artworks from './components/Artworks/Artworks'
import ArtSchool from './components/ArtSchool/ArtSchool'
import Contacts from './components/Contacts/Contacts'
import SunProject from './components/SunProject/SunProject'
import Dialogs from './components/Dialogs/Dialogs'
import RootPicture from './components/RootPicture/RootPicture';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas/Canvas';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Sidebar state={props.state.sidebar} />
        <div className="app__wrapper_content">
          <Route exact path="/" component={RootPicture} />
          <Route path="/aboutme" render={(() => <AboutMe />)} />
          <Route path="/news" render={(() => <News
            state={props.state.newsPage}
            dispatch={props.dispatch} />)} />
          <Route path="/artworks" render={(() => <Artworks
            state={props.state.artworks} />)} />
          <Route path="/artschool" component={ArtSchool} />
          <Route path="/sunproject" component={SunProject} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/canvas" render={(() => <Canvas />)} />
          <Route path="/dialogs" render={(() => <Dialogs
            state={props.state.dialogsPage}
            dispatch={props.dispatch}
          />)} />
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}







export default App;
