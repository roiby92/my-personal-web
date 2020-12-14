import React from 'react'
import './App.css';
import NavBar from './Components/Layout/NavBar';
import Container from './Components/Layout/Container';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Education from './Components/Pages/Education'
import MilitaryService from './Components/Pages/MilitaryService'

function App() {
  
  return (
    <Router id="app">
      <NavBar />
      <Container>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" exact render={() => <About />} />
        <Route path="/education" exact render={() => <Education />} />
        <Route path="/militaryservice" exact render={() => <MilitaryService />} />
      </Container>
    </Router>
  );
}

export default App;
