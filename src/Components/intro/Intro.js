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
                <div className='introrole'>web developer</div>
            </span>
            <p className='intropara'>I am a skilled web designer with experience in creating<br></br> visually and user friendly websites;</p>

            <div className='btnlinks'>  
                <a href="https://drive.google.com/file/d/1pSE4jjaxMoWYYqAzD9yzn8rv_KQg4ziz/view?usp=sharing" className='alink' target="_blank" rel="noopener noreferrer" ><img src={download} alt="github" className='aimg'></img><span className='atext'>Resume</span></a>
              <a href="https://www.linkedin.com/in/beepali-srikanth-bab716281/" className='alink' target="_blank" rel="noopener noreferrer" ><img src={linkedin}  alt="github" className='aimg'></img><span className='atext'>LinkedIn</span></a>
              <a href="https://github.com/Beepalisrikanth" className='alink' target="_blank" rel="noopener noreferrer" ><img src={github} alt="github" className='aimg'></img><span className='atext'>GitHub</span></a>
            





              {/* <Link className='btnlink'>
                <button className='btn'>
                  <img src={github} alt=" " className='btnimg'></img>
                  <span className='btnlinkname'>GitHub</span>
                </button>
              </Link>
             
              <Link className='btnlink'>
                <button className='btn'> 
                  <img src={linkedin} alt=" linked" className='btnimg'></img>
                  <span className='btnlinkname'>LinkedIn</span>
                </button>
              </Link> */}
              
              
            </div>
        </div>
        <img src={sribg} alt="profie pic" className="profile"></img>
    </section>
  )
}

export default Intro
