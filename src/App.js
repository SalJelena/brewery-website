import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom"
import GlobalFonts from './Fonts/fonts';
import GlobalStyles from './GlobalStyles';
import Home from './components/Home/Home';
import About from './components/About/About';
import Beers from './components/Beers/Beers';
import Login from './components/Forms/Login/Login';
import Register from './components/Forms/Register/Register';
import GotIdea from './components/Forms/GotIdea/GotIdea';
import StyledNav from './components/Home/Navbar/StyledNav';
import StyledLink from './components/Home/Navbar/StyledLink';
import StyledLinkBtn from './components/Home/Navbar/StyledLinkBtn';
import StyledImg from './components/Home/StyledImg';
import Beer from './components/Beers/Beer';
import {StyledIconUser, StyledButtonLogOut } from './components/Home/Navbar/StyledIconUser';
import Footer from './components/Footer/Footer';
import User from './components/Forms/User/User';

const App = () => {

  const [beers, setBeers] = useState([])
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

 
  const history = useHistory()

  return (
   
    <Router>
      <GlobalFonts />
      <GlobalStyles />
     
      <StyledNav>
        <StyledImg src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634024959/final_project/3.14vnica_zehias.png" alt="logo"  />
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About us</StyledLink>
        <StyledLink to="/beers">Beers</StyledLink>
        <StyledLink to="/gotidea">Got idea?</StyledLink>

        { user ? 
        <>
        <StyledLink to="/user">
          <p>Hello, <b>{user.username}</b></p>
        </StyledLink>
        <StyledButtonLogOut onClick={()=>{
          setUser(null)
          
        }}>Log out</StyledButtonLogOut>
        </>
        :
        <>
        <StyledLinkBtn to="/login">Login</StyledLinkBtn>
        <StyledLinkBtn to="/register">Register</StyledLinkBtn>
        </>
        }
       
      </StyledNav>
     

    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route exact path="/beers">
        <Beers user={user} beers={beers} setBeers={setBeers} />
      </Route>

      <Route exact path="/beers/:id">
					<Beer beers={beers} user={user} setUsers={setUsers} />
			</Route>

      <Route path="/gotidea">
        <GotIdea user={user} setBeers={setBeers} />
      </Route>

      <Route exact path="/user">
        <User user={user} />
      </Route>

      <Route path="/login">
        <Login setUser={setUser} setUsers={setUser} />
      </Route>

      <Route path="/register">
        <Register setUsers={setUsers} />
      </Route>


    </Switch>

        <Footer />

    </Router>


  );
}


export default App;
