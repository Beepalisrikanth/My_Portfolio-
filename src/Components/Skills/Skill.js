import React from 'react'
import './skill.css'

const Skill = () => {
  return (
    <section id="skills">
        <span className='skillTitle'> What I do </span>
        <span className='skiilDescrib'>I am a skilled and passionate web designer with experience in creating visually appealling and user-friendly websites. I have a strong understanding of design and a keen eye fo rdetail. i am proficient in html, css , and javaScript,as well as design software such as adobe photoshop and illustrator. </span>

        <div className='skillcards'>
            <div className='skillcard'>
                <h1 className='categories'>Programming Languages</h1>
                <div className='subskills'>
                    <span className='subskill'> Python</span>
                    <span className='subskill'> javaScript</span>
                    <span className='subskill'> c (basics)</span>
                </div>
            </div>

            <div className='skillcard'>
                <h1 className='categories'>Frontend Development</h1>
                <div className='subskills'>
                    <span className='subskill'>hTML5</span>
                    <span className='subskill'> CSS3</span>
                    <span className='subskill'> JavaScript(ES6+)</span>
                    <span className='subskill'> react.js</span>
                    <span className='subskill'> Tailwind CSS</span>
                </div>
            </div>

            <div className='skillcard'>
                <h1 className='categories'>Databases</h1>
                <div className='subskills'>
                    <span className='subskill'> MySQL</span>
                    <span className='subskill'> MongoDB</span>
                    <span className='subskill'> PL/SQL</span>
                </div>
            </div>

            <div className='skillcard'>
                <h1 className='categories'>Tools & Platforms</h1>
                <div className='subskills'>
                    <span className='subskill'> Git</span>
                    <span className='subskill'> GitHub</span>
                    <span className='subskill'> VS Code</span>
                    <span className='subskill'> Postman</span>
                    <span className='subskill'> Thunder Client</span>

                </div>
            </div>

            <div className='skillcard'>
                <h1 className='categories'>Programming Languages</h1>
                <div className='subskills'>
                    <span className='subskill'> Python</span>
                    <span className='subskill'> javaScript</span>
                    <span className='subskill'> c (basics)</span>
                </div>
            </div>





        </div>




      
    </section>
  )
}

export default Skill
