import React, { useState } from 'react'
import './Projects.css'
import p1 from '../../assests/felxiPose.webp';
import p2 from '../../assests/housie.png';
// import p3 from '../../assests/palamuru_university.webp';
import p4 from '../../assests/password_generator.png';
import p5 from '../../assests/Agrichain.png';
import p6 from '../../assests/QuizGame.png';
import p7 from '../../assests/hangMan.png';

// import p6 from '../../assests/QuizGame.png';
// import p6 from '../../assests/QuizGame.png';

const Projects = () => {
  const [viewMore, setViewMore] = useState(false)
  return (
    <section id="projects">

      <h2 className='projectTitle'>My Projects</h2>
      <span className="projectDesc">Developed multiple projects applying concepts of web development, databases, and emerging tech. Demonstrates practical skills, creativity, and the ability to learn and adapt quickly</span>
      <div className='projectblocks'>


        <div className='projectblock'>
          <img src={p1} alt="project pic flexi pose " className='projectblockimg'></img>
          <p className='projectblocktitle'>Flexi Pose </p>
          <p className='projectblocksubtitle'>Flexi Pose: Smart Motion Tracking with Real-Time PoseNet ai</p>
          <p className='projectblockdesc'>Built a browser-based real-time AI system that detects human posture and activities (sitting, standing, walking, sleeping) using webcam input.</p>
          <p className='projectblockdesc'>Features include live pose estimation, activity classification, smooth animations, and responsive design for both mobile and desktop.</p>
          <p className='projectblockdesc'>Challenges overcome: Optimized frame processing for consistent 30+ FPS performance across devices.</p>
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
            <a href='https://drive.google.com/file/d/1-8VUXsGRNVreb5M8b-UIlPLIbYZJcuq6/view?usp=sharing' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documentation</a>
            <a href="https://github.com/Beepalisrikanth/FlexiPose-Smart-Motion-Tracking-with-Real-Time-PoseNet-AI-" className='projectblockproject' target="_blank" rel="noopener noreferrer">View Code</a>
            <a href=" https://flexipose.onrender.com/" className='projectblockproject' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='projectblock'>
          <img src={p5} alt="Agrichain project" className='projectblockimg' />
          <p className='projectblocktitle'>AgriChain</p>
          <p className='projectblocksubtitle'>MERN Stack Agriculture Supply Chain Platform</p>
          <p className='projectblockdesc'>Developed a complete end-to-end platform connecting farmers and buyers. Farmers can list produce with images; buyers can browse, place orders, and complete test payments. Admins manage users, products, and view dashboard analytics.</p>
          <p className='projectblockdesc'>Features: JWT authentication with role-based access (Farmer/Buyer/Admin), image uploads, contract PDF generation, and Stripe test payments.</p>
          {/* <p className='projectblockdesc'></p> */}
          <div className='projectblockskills'>
            <span className='projectblockskill'>MongoDB</span>
            <span className='projectblockskill'>Express.js</span>
            <span className='projectblockskill'>React</span>
            <span className='projectblockskill'>Node.js</span>
            <span className='projectblockskill'>Stripe</span>
          </div>
          <div className='projectblockprojects'>
            <a href='https://drive.google.com/file/d/18W3XUABROk7xAUf0SI5AbVlEFsblo6hl/view?usp=sharing' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documentation</a>
            <a href="https://github.com/Beepalisrikanth/AgriChain-the-smart-farming-" className='projectblockproject' target="_blank" rel="noopener noreferrer" >View Code</a>
            <a href="https://drive.google.com/drive/folders/1HYDHiXoVVMrj2yimjqoAfkm1CRO3aCOe?usp=sharing" className='projectblockproject' target="_blank" rel="noopener noreferrer" > Live Demo </a>
          </div>
        </div>

        <div className='projectblock'>
          <img src={p2} alt="Find My Train project" className='projectblockimg'></img>
          <p className='projectblocktitle'>Find My Train</p>
          <p className='projectblocksubtitle'> Find My Train: Real-Time Train Search & Tracking Web Application </p>
          <p className='projectblockdesc'> Developed a full-stack web application that allows users to search trains, view schedules, and access real-time railway information through an intuitive interface.</p>
          <p className='projectblockdesc'> Implemented dynamic API integration, responsive UI design, and fast search functionality to provide seamless train discovery across routes and stations. </p>
          <p className='projectblockdesc'> Challenges overcome: Handled API rate limits, optimized data fetching, and improved loading performance for smooth user experience on low networks. </p>
          <div className='projectblockskills'>
            <span className='projectblockskill'>React.js</span>
            <span className='projectblockskill'>Tailwind CSS</span>
            <span className='projectblockskill'>REST API</span>
            <span className='projectblockskill'>Responsive Design</span>
            <span className='projectblockskill'>Render Deployment</span>
          </div>
          <div className='projectblockprojects'>
            {/* <a href='#' className='projectblockproject' target="_blank" rel="noopener noreferrer"> Documentation </a> */}
            <a href="https://github.com/Beepalisrikanth/FIND_MY_TRAIN" className='projectblockproject' target="_blank" rel="noopener noreferrer"> View Code </a>
            <a href="https://find-my-train-beepali-srikanth.onrender.com/" className='projectblockproject' target="_blank" rel="noopener noreferrer"> Live Demo </a>
          </div>
        </div>

        <div className='projectblock'>
          <img src={p6} alt="Quiz Application Project" className='projectblockimg'></img>
          <p className='projectblocktitle'>Quiz Application</p>
          <p className='projectblocksubtitle'>Interactive Quiz Web App with Score Tracking </p>
          <p className='projectblockdesc'>Built a dynamic quiz application featuring multiple-choice questions, timer, score tracking, instant feedback, and smooth question navigation using modern React patterns and TypeScript.</p>
          {/* <p className='projectblockdesc'></p> */}
          {/* <p className='projectblockdesc'></p> */}
          <div className='projectblockskills'>
            <span className='projectblockskill'>HTML</span>
            <span className='projectblockskill'>CSS</span>
            <span className='projectblockskill'>JavaScript</span>
            <span className='projectblockskill'>React.js</span>
            <span className='projectblockskill'>TypeScript</span>
          </div>
          <div className='projectblockprojects'>
            {/* <a href='https://drive.google.com/file/d/1-8VUXsGRNVreb5M8b-UIlPLIbYZJcuq6/view?usp=sharing' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documentation</a> */}
            <a href="https://github.com/Beepalisrikanth/QUIZ_APPLICATION" className='projectblockproject' target="_blank" rel="noopener noreferrer">View Code</a>
            <a href="https://srikanth-quiz-application.onrender.com" className='projectblockproject' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='projectblock'>
          <img src={p7} alt="Hangman Game Project" className='projectblockimg'></img>
          <p className='projectblocktitle'>Hangman Game</p>
          <p className='projectblocksubtitle'> Classic Word Guessing Game with Interactive UI</p>
          <p className='projectblockdesc'>Developed a classic Hangman game with real-time letter guessing, visual progression for incorrect attempts, win/lose conditions, and engaging UI using React state management.</p>
          {/* <p className='projectblockdesc'></p> */}
          {/* <p className='projectblockdesc'></p> */}
          <div className='projectblockskills'>
            <span className='projectblockskill'>HTML</span>
            <span className='projectblockskill'>CSS</span>
            <span className='projectblockskill'>JavaScript</span>
            <span className='projectblockskill'>React.js</span>
            <span className='projectblockskill'>TypeScript</span>
          </div>
          <div className='projectblockprojects'>
            {/* <a href='https://drive.google.com/file/d/18W3XUABROk7xAUf0SI5AbVlEFsblo6hl/view?usp=sharing' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documentation</a> */}
            <a href="https://github.com/Beepalisrikanth/HANGMAN_GAME" className='projectblockproject' target="_blank" rel="noopener noreferrer" >View Code</a>
            <a href="https://srikanth-hangman-game.onrender.com" className='projectblockproject' target="_blank" rel="noopener noreferrer" > Live Demo </a>
          </div>
        </div>

        <div className='projectblock'>
          <img src={p2} alt="project pic argichain" className='projectblockimg'></img>
          <p className='projectblocktitle'>Housie Game</p>
          <p className='projectblocksubtitle'>Web-Based Tambola Game with Real-Time Number Calling</p>
          <p className='projectblockdesc'>Created an interactive digital Tambola (Housie) game with ticket generation, random number calling, coin tracking, audio alerts, and winning notifications.</p>
          {/* <p className='projectblockdesc'></p>
          <p className='projectblockdesc'></p> */}
          <div className='projectblockskills'>
            <span className='projectblockskill'> HTML</span>
            <span className='projectblockskill'> CSS</span>
            <span className='projectblockskill'> JavaScript</span>
          </div>
          <div className='projectblockprojects'>
            <a href='https://github.com/Beepalisrikanth/Housie_web_based_game_srikanth?tab=readme-ov-file#-readmemd' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documentation</a>
            <a href="https://github.com/Beepalisrikanth/Housie_web_based_game_srikanth?tab=readme-ov-file" className='projectblockproject' target="_blank" rel="noopener noreferrer">View Code</a>
            <a href="https://housie-web-based-game-by-srikanth.onrender.com" className='projectblockproject' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {viewMore && <>

        <div className='projectblock'>
          <img src={p4} alt="Password Generator Project" className='projectblockimg'></img>
          <p className='projectblocktitle'>Password Generator </p>
          <p className='projectblocksubtitle'>Strong & Secure Password Generator Web App</p>
          <p className='projectblockdesc'>Fast and customizable password generator with options for length, character types, strength indicator, and one-click copy functionality.</p>
          {/* <p className='projectblockdesc'></p> */}
          {/* <p className='projectblockdesc'></p> */}
          <div className='projectblockskills'>
            <span className='projectblockskill'> HTML</span>
            <span className='projectblockskill'> CSS</span>
            <span className='projectblockskill'> JavaScript</span>
          </div>
          <div className='projectblockprojects'>
            <a href='https://github.com/Beepalisrikanth/Password_Generated_by_srikanth?tab=readme-ov-file' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documentation</a>
            <a href="https://github.com/Beepalisrikanth/Password_Generated_by_srikanth" className='projectblockproject' target="_blank" rel="noopener noreferrer" >View Code</a>
            <a href="https://password-generated-by-srikanth-gv30.onrender.com" className='projectblockproject' target="_blank" rel="noopener noreferrer" > Live Demo </a>
          </div>
        </div>

            <div className='projectblock'>
              <img src={p4} alt="Password Generator Project" className='projectblockimg'></img>
              <p className='projectblocktitle'>Password Generator </p>
              <p className='projectblocksubtitle'>Strong & Secure Password Generator Web App</p>
              <p className='projectblockdesc'>Fast and customizable password generator with options for length, character types, strength indicator, and one-click copy functionality.</p>
              {/* <p className='projectblockdesc'></p> */}
              {/* <p className='projectblockdesc'></p> */}
              <div className='projectblockskills'>
                <span className='projectblockskill'> HTML</span>
                <span className='projectblockskill'> CSS</span>
                <span className='projectblockskill'> JavaScript</span>
              </div>
              <div className='projectblockprojects'>
                <a href='https://github.com/Beepalisrikanth/Password_Generated_by_srikanth?tab=readme-ov-file' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documentation</a>
                <a href="https://github.com/Beepalisrikanth/Password_Generated_by_srikanth" className='projectblockproject' target="_blank" rel="noopener noreferrer" >View Code</a>
                <a href="https://password-generated-by-srikanth-gv30.onrender.com" className='projectblockproject' target="_blank" rel="noopener noreferrer" > Live Demo </a>
              </div>
            </div>

            <div className='projectblock'>
              <img src={p4} alt="Password Generator Project" className='projectblockimg'></img>
              <p className='projectblocktitle'>Password Generator </p>
              <p className='projectblocksubtitle'>Strong & Secure Password Generator Web App</p>
              <p className='projectblockdesc'>Fast and customizable password generator with options for length, character types, strength indicator, and one-click copy functionality.</p>
              {/* <p className='projectblockdesc'></p> */}
              {/* <p className='projectblockdesc'></p> */}
              <div className='projectblockskills'>
                <span className='projectblockskill'> HTML</span>
                <span className='projectblockskill'> CSS</span>
                <span className='projectblockskill'> JavaScript</span>
              </div>
              <div className='projectblockprojects'>
                <a href='https://github.com/Beepalisrikanth/Password_Generated_by_srikanth?tab=readme-ov-file' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documentation</a>
                <a href="https://github.com/Beepalisrikanth/Password_Generated_by_srikanth" className='projectblockproject' target="_blank" rel="noopener noreferrer" >View Code</a>
                <a href="https://password-generated-by-srikanth-gv30.onrender.com" className='projectblockproject' target="_blank" rel="noopener noreferrer" > Live Demo </a>
              </div>
            </div>

            <div className='projectblock'>
              <img src={p4} alt="Password Generator Project" className='projectblockimg'></img>
              <p className='projectblocktitle'>Password Generator </p>
              <p className='projectblocksubtitle'>Strong & Secure Password Generator Web App</p>
              <p className='projectblockdesc'>Fast and customizable password generator with options for length, character types, strength indicator, and one-click copy functionality.</p>
              {/* <p className='projectblockdesc'></p> */}
              {/* <p className='projectblockdesc'></p> */}
              <div className='projectblockskills'>
                <span className='projectblockskill'> HTML</span>
                <span className='projectblockskill'> CSS</span>
                <span className='projectblockskill'> JavaScript</span>
              </div>
              <div className='projectblockprojects'>
                <a href='https://github.com/Beepalisrikanth/Password_Generated_by_srikanth?tab=readme-ov-file' className='projectblockproject' target="_blank" rel="noopener noreferrer">Documentation</a>
                <a href="https://github.com/Beepalisrikanth/Password_Generated_by_srikanth" className='projectblockproject' target="_blank" rel="noopener noreferrer" >View Code</a>
                <a href="https://password-generated-by-srikanth-gv30.onrender.com" className='projectblockproject' target="_blank" rel="noopener noreferrer" > Live Demo </a>
              </div>
            </div>

          </>

        }

      </div>
      <button onClick={() => {
        if (viewMore) {
          setViewMore(false)
        }
        else {
          setViewMore(true)
        }
      }} className='seemore'>{viewMore ? "View Less Projects" : "View More Projects"}</button>
    </section>
  )
}

export default Projects
