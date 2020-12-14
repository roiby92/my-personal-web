import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/HomeCompo/About'
import Education from './Components/Pages/Education'
import MilitaryService from './Components/Pages/MilitaryService'
import Layout from './Components/Layout/Layout';

function App() {

  return (
    <Router>
      <Layout>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" exact render={() => <About />} />
        <Route path="/education" exact render={() => <Education />} />
        <Route path="/militaryservice" exact render={() => <MilitaryService />} />
      </Layout>
    </Router>
  );
}

export default App;
