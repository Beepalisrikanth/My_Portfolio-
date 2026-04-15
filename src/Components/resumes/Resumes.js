import React from 'react'
import "./Resumes.css"

import download from '../../assests/download.png'
import view from '../../assests/logoEye.png'
const Resumes = () => {
    return (
        <div className='OuterResumes'>
            <div className='innerResumes'>
                <a href="https://drive.google.com/uc?export=download&id=1y9T6N9dN_68PaFaBqpY-Y-K1-7e45eMi" className="alink" ><img src={download} alt="resume" className="aimg" /><span className="atext">Download Resume</span> </a>
                <a href="https://drive.google.com/file/d/1y9T6N9dN_68PaFaBqpY-Y-K1-7e45eMi/view?usp=sharing" className='alink' target="_blank" rel="noopener noreferrer" ><img src={view} alt="resume" className='aimg'></img><span className='atext'>View Resume</span></a>

            </div>
        </div>
    )
}

export default Resumes
