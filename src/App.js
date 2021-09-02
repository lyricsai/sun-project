import './App.css';
import { BrowserRouter, Route, } from "react-router-dom";


import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/AboutMe'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import Artworks from './components/Artworks/Artworks'
import ArtSchool from './components/ArtSchool/ArtSchool'
import Contacts from './components/Contacts/Contacts'
import SunProject from './components/SunProject/SunProject'
import Dialogs from './components/Dialogs/Dialogs'
import RootPicture from './components/RootPicture/RootPicture';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav />
        <div className="app__wrapper_content">

          <Route exact path="/" component={RootPicture} />
          <Route path="/aboutme" render={(() => <AboutMe postsData={props.postsData} />)} />
          <Route path="/news" component={News} />
          <Route path="/artworks" component={Artworks} />
          <Route path="/artschool" component={ArtSchool} />
          <Route path="/sunproject" component={SunProject} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/dialogs" render={(() => <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData} />)} />
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}







export default App;
