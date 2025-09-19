import React from 'react'
import './skill.css'
import UIDesign from '../../assests/ui-design.png'
import webDesign from '../../assests/website-design.png'
import appDesign from '../../assests/app-design.png'

const Skill = () => {
  return (
    <section id="skills">
        <span className='skillTitle'> What I do </span>
        <span className='skiilDescrib'>I am a skilled and passionate web designer with experience in creating visually appealling and user-friendly websites. I have a strong understanding of design and a keen eye fo rdetail. i am proficient in html, css , and javaScript,as well as design software such as adobe photoshop and illustrator. </span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={UIDesign} alt="uidesign" className='skillbarimg'></img>
                <div className='skillBarText'>
                    <h2>UI/UX design</h2>
                    <p>this is a demo text</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={webDesign} alt="wenbdesign" className='skillbarimg'></img>
                <div className='skillBarText'>
                    <h2>website design</h2>
                    <p>this is a demo text</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={appDesign} alt="appdesign" className='skillbarimg'></img>
                <div className='skillBarText'>
                    <h2>App design</h2>
                    <p>this is a demo text</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
