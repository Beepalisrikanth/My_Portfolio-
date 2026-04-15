import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import Intro from './Components/intro/Intro';
import Skill from './Components/Skills/Skill';
import Projects from './Components/Project/Projects';
import Client from './Components/Certificates/Client';
import Footer from './Components/Footer/Footer';
import Resumes from './Components/resumes/Resumes';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <Skill/>
     <Projects/>
     <Client/>
     <Resumes/>
     <Footer/>
    </div>
  );
}

export default App;
