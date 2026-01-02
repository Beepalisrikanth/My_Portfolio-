import React from 'react'
import './Intro.css';
import sribg from '../../assests/sribg.png'
import download from '../../assests/download.png'
import github from '../../assests/github.png'
import linkedin from '../../assests/linkedin.png'
// import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introsection">
            <span className="hello">Hello. </span>
            <span className="introtext">I'm   
                <span className="introname"> Beepali Srikanth </span><br></br>
                <div className='introrole'></div>
            </span>
            <p className='intropara'>I am a skilled web designer with experience in creating<br></br> visually and user friendly websites;</p>

            <div className='btnlinks'>  
              <a href="https://drive.google.com/file/d/161qB-LYy4JLebApmNbJ-l-iGw_duEALn/view?usp=sharing" className='alink' target="_blank" rel="noopener noreferrer" ><img src={download} alt="resume" className='aimg'></img><span className='atext'>Resume</span></a>
              <a href="https://www.linkedin.com/in/beepali-srikanth-bab716281/" className='alink' target="_blank" rel="noopener noreferrer" ><img src={linkedin}  alt="github" className='aimg'></img><span className='atext'>LinkedIn</span></a>
              <a href="https://github.com/Beepalisrikanth" className='alink' target="_blank" rel="noopener noreferrer" ><img src={github} alt="github" className='aimg'></img><span className='atext'>GitHub</span></a>       
              
            </div>
        </div>
        <img src={sribg} alt="profie pic" className="profile"></img>
    </section>
  )
}

export default Intro
