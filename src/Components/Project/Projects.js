import React from 'react'
import './Projects.css'
import p1 from '../../assests/felxiPose.webp';
import p2 from '../../assests/housie.png';
import p3 from '../../assests/palamuru_university.webp';
// import p4 from '../../assests/portfolio-4.png';
// import p5 from '../../assests/portfolio-5.png';
// import p6 from '../../assests/portfolio-6.png';


const Projects = () => {
  return (
    <section id="projects">

      <h2 className='projectTitle'>My Projects</h2>
      <span className="projectDesc">Developed multiple projects applying concepts of web development, databases, and emerging tech. Demonstrates practical skills, creativity, and the ability to learn and adapt quickly</span>
      <div className='projectblocks'>

        <div className='projectblock'>
          <img src={p1} alt="project pic flexi pose " className='projectblockimg'></img>
          <p className='projectblocktitle'>Flexi Pose </p>
          <p className='projectblocksubtitle'>Smart Motion Tracking with Real-Time PoseNet ai</p>
          <p className='projectblockdesc'>Flexi Pose is an AI-based system that detects posture and activities like sitting, standing, walking, and sleeping in real time. It helps users monitor physical behavior and maintain a healthy lifestyle using PoseNet and TensorFlow.js.</p>
          <div className='projectblockskills'> 
            <span className='projectblockskill'> HTML</span>
            <span className='projectblockskill'> CSS</span>
            <span className='projectblockskill'> JavaScript</span>
            <span className='projectblockskill'> TensorFlow.js</span>
            <span className='projectblockskill'> PoseNet</span>
            <span className='projectblockskill'> p5.js</span>
            <span className='projectblockskill'> ml5.js</span>
          </div>
          <div className='projectblockprojects'>
            <a href='https://drive.google.com/file/d/1-8VUXsGRNVreb5M8b-UIlPLIbYZJcuq6/view?usp=sharing' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documation</a>
            <a href="https://github.com/Beepalisrikanth/FlexiPose-Smart-Motion-Tracking-with-Real-Time-PoseNet-AI-" className='projectblockproject'target="_blank" rel="noopener noreferrer">View Code</a>
            <a href=" https://flexipose.onrender.com/" className='projectblockproject' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        
        <div className='projectblock'>
          <img src={p2} alt="project pic argichain" className='projectblockimg'></img>
          <p className='projectblocktitle'>Housie Game</p>
          <p className='projectblocksubtitle'>Web-Based Tambola Game with Real-Time Number Calling</p>
          <p className='projectblockdesc'>Housie is an interactive web-based Tambola game where users can generate tickets, draw random numbers, track marked coins, and receive audio alerts during gameplay. It enhances the traditional housie experience with smooth UI, number animation, and winning notifications</p>
          <div className='projectblockskills'> 
            <span className='projectblockskill'> HTML</span>
            <span className='projectblockskill'> CSS</span>
            <span className='projectblockskill'> JavaScript</span>
          </div>
          <div className='projectblockprojects'>
            <a href='https://github.com/Beepalisrikanth/Housie_web_based_game_srikanth?tab=readme-ov-file#-readmemd' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documation</a>
            <a href="https://github.com/Beepalisrikanth/Housie_web_based_game_srikanth?tab=readme-ov-file" className='projectblockproject'target="_blank" rel="noopener noreferrer">View Code</a>
            <a href="https://housie-web-based-game-by-srikanth.onrender.com" className='projectblockproject' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
        
        
        <div className='projectblock'>
          <img src={p3} alt="university website " className='projectblockimg'></img>
          <p className='projectblocktitle'>University Website Clone</p>
          <p className='projectblocksubtitle'>Responsive Multi-Page Educational Portal</p>
          <p className='projectblockdesc'> A basic clone of the Palamuru University website built with HTML, CSS, and JavaScript. 
    It replicates the structure and design of a real university site, including navigation menus, 
    announcements, events, and departmental sections for practice in frontend development.</p>
          <div className='projectblockskills'> 
            <span className='projectblockskill'> HTML</span>
            <span className='projectblockskill'> CSS</span>
            <span className='projectblockskill'> JavaScript</span>
          </div>
          <div className='projectblockprojects'>
            {/* <span className='projectblockproject'>Documation</span> */}
            <span className='projectblockproject'>View Code</span>
            <span className='projectblockproject'>Live Demo</span>
          </div>
        </div>
        
        <div className='projectblock'>
          <img src={p2} alt=" project pic Binance Trading Bot" className='projectblockimg'></img>
          <p className='projectblocktitle'>Binance Futures Trading Bot </p>
          <p className='projectblocksubtitle'>Automated Crypto Trading with Python</p>
          <p className='projectblockdesc'> A Python-based crypto trading bot for Binance USDT-M Futures Testnet. 
            It supports Market and Limit orders, secure API key handling, detailed logging, 
            and a simple Command-Line Interface for real-time trading.</p>
          <div className='projectblockskills'> 
            <span className='projectblockskill'> Python</span>
            <span className='projectblockskill'> Binance API</span>
            <span className='projectblockskill'> CLI</span>
            <span className='projectblockskill'> dotenv</span>
            <span className='projectblockskill'> Logging</span>
          </div>
          <div className='projectblockprojects'>
            <span className='projectblockproject'>Documation</span>
            <span className='projectblockproject'>View Code</span>
            <span className='projectblockproject'>Live Demo</span>
          </div>
        </div>
        
        {/* <div className='projectblock'>
          <img src={p1} alt=" " className='projectblockimg'></img>
          <p className='projectblocktitle'>Felxi Pose </p>
          <p className='projectblocksubtitle'>Smart Motion Tracking with Real-Time PoseNet ai</p>
          <p className='projectblockdesc'>Flexi Pose is an AI-based system that detects posture and activities like sitting, standing, walking, and sleeping in real time. It helps users monitor physical behavior and maintain a healthy lifestyle using PoseNet and TensorFlow.js.</p>
          <div className='projectblockskills'> 
            <span className='projectblockskill'> HTML</span>
            <span className='projectblockskill'> CSS</span>
            <span className='projectblockskill'> JavaScript</span>
            <span className='projectblockskill'> TensorFlow.js</span>
            <span className='projectblockskill'> PoseNet</span>
            <span className='projectblockskill'> p5.js</span>
            <span className='projectblockskill'> ml5.js</span>
          </div>
          <div className='projectblockprojects'>
            <span className='projectblockproject'>Documation</span>
            <span className='projectblockproject'>View Code</span>
            <span className='projectblockproject'>Live Demo</span>
          </div>
        </div>
         */}


      </div>


        
        <button className='seemore'>See More</button>
    </section>
  )
}

export default Projects
