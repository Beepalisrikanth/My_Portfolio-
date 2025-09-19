import React from 'react'
import {useRef} from 'react';
import './Client.css'
import c1 from '../../assests/Aavanto.png'
import c2 from '../../assests/GreatLearning.png'
import c3 from '../../assests/hankerRank.png'
import c4 from '../../assests/aicte.jpg'
import c5 from '../../assests/freedom-with-AI.png'
import c6 from '../../assests/simplilearn.webp'



import fbicon from '../../assests/facebook-icon.png'
import ticon from '../../assests/twitter.png'
import yticon from '../../assests/youtube.png'
import instaicon from '../../assests/instagram.png'

import emailjs from '@emailjs/browser';

const Client = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_m53iv2o', 'template_44gcbf9', form.current, {
            publicKey: 'mUkv3VgjiMYxiPDIZ',
        })
        .then(() => {
            console.log('SUCCESS!');
            alert('eamil sned succeefully')
            form.current.reset()
        }, (error) => {
            console.log('FAILED...', error.text);
            alert('FAILED...', error.text)
            form.current.reset()
        },);
    };

  return (
    <section id='clientPage'>
        <div id='clients'>
            <h1 className='clientPageTitle'>My Certificates</h1>
            <p className='clintDesc'>Earned recognition for completing industry-relevant training with hands-on learning and assessments. Demonstrated commitment to continuous learning and career growth</p>
        </div>
        <div className='certificateblocks'>
           

            <div className='certificateblock'>
                <a href="https://www.aavanto.com/" target="_blank" rel="noopener noreferrer"><img src={c1} alt="certificate_image" className='certificateblockimg'></img></a>
                <p className='certificateblocktitle'>Core Python Programming</p>
                <p className='certificateblocksubtitle'>Aavanto | 2023</p>
                <p className='certificateblockdesc'>
                    Successfully completed a certified course with hands-on learning and projects.
                </p>
                <div className='certificateblocklinks'>
                    <a href="https://drive.google.com/file/d/1thhJg6_n9l-K5sdYm4uxg4b4QY1-dpFI/view?usp=sharing" className='certificateblocklink' target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
            </div>


            <div className='certificateblock'>
                <a href="https://www.aicte.gov.in/" target="_blank" rel="noopener noreferrer"><img src={c4} alt="greatlearning" className='certificateblockimg'></img></a>
                <p className='certificateblocktitle'>AI: Transformative Learning Internship</p>
                <p className='certificateblocksubtitle'>AICTE | Microsoft & SAP | 2024</p>
                <p className='certificateblockdesc'>
                   Successfully completed an internship on AI: Transformative Learning under the TechSaksham program,
                    a joint CSR initiative of Microsoft & SAP implemented by Edunet Foundation.
                </p>
                <div className='certificateblocklinks'>
                    <a href="https://drive.google.com/file/d/1maKTa9o5Do2a7TVNCCZa96M5UQRzLF0t/view?usp=sharing" className='certificateblocklink' target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
            </div>

            <div className='certificateblock'>
                <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer"><img src={c3} alt="certificate_image" className='certificateblockimg'></img></a>
                <p className='certificateblocktitle'>frontend developer (react) </p>
                <p className='certificateblocksubtitle'>hacker Rank | 2025</p>
                <p className='certificateblockdesc'>
                    Successfully passed the HackerRank frontend developer (react) skill certification test, 
                    demonstrating fundamental knowledge of React.
                </p>
                <div className='certificateblocklinks'>
                    <a href="https://drive.google.com/file/d/1xLahNi3k2oA-sYfNcV6uIOV9YdGyw83j/view?usp=sharing" className='certificateblocklink' target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
            </div>

            <div className='certificateblock'>
                <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer"><img src={c3} alt="certificate_image" className='certificateblockimg'></img></a>
                <p className='certificateblocktitle'>CSS Basics</p>
                <p className='certificateblocksubtitle'>hanker Rank | 2025</p>
                <p className='certificateblockdesc'>
                    Successfully passed the HackerRank CSS (Basic) skill certification test, 
                    demonstrating fundamental knowledge of Cascading Style Sheets.
                </p>
                <div className='certificateblocklinks'>
                    <a href="https://drive.google.com/file/d/1v1rJZZWzNvX_vZCCSYX7F50NtAEicYdO/view?usp=sharing" className='certificateblocklink' target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
            </div>

            <div className='certificateblock'>
                <a href="https://www.mygreatlearning.com/" target="_blank" rel="noopener noreferrer"><img src={c2} alt="certificate_image" className='certificateblockimg'></img></a>
                <p className='certificateblocktitle'>Programming Basics</p>
                <p className='certificateblocksubtitle'>Great Learning | 2024</p>
                <p className='certificateblockdesc'>
                    Successfully completed a certified course with hands-on learning and projects.
                </p>
                <div className='certificateblocklinks'>
                    <a href="https://drive.google.com/file/d/14q6NZbswma8WRxNaLuznmuJO48TKZ7nf/view?usp=sharing" className='certificateblocklink' target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
            </div>

            <div className='certificateblock'>
                <a href="https://freedomwithai.com/" target="_blank" rel="noopener noreferrer"><img src={c5} alt="certificate_image" className='certificateblockimg'></img></a>
                <p className='certificateblocktitle'>freedom with AI masterclass</p>
                <p className='certificateblocksubtitle'>FREEDOM WITH AI | 2024</p>
                <p className='certificateblockdesc'>
                    Successfully completed a certified course with hands-on learning and projects.
                </p>
                <div className='certificateblocklinks'>
                    <a href="https://drive.google.com/file/d/14nFh18urW4fW41mkci1sKfVmqrAhVY9K/view?usp=sharing" className='certificateblocklink' target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
            </div>

            <div className='certificateblock'>
                <a href="https://lms.simplilearn.com/" target="_blank" rel="noopener noreferrer"><img src={c6} alt="certificate_image" className='certificateblockimg'></img></a>
                <p className='certificateblocktitle'>Git Training</p>
                <p className='certificateblocksubtitle'>Simpli Learn | 2024</p>
                <p className='certificateblockdesc'>
                      Successfully completed Git training, gaining hands-on experience in version control and collaboration.
                </p>
                <div className='certificateblocklinks'>
                    <a href="https://drive.google.com/file/d/19lR-8uH0Y2qjpwPUz5LN0MVtPKaD-dgf/view?usp=sharing" className='certificateblocklink' target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
            </div>
            

            

        </div>

        {/* <div className='clientImgs'>
            <img src={walmart} alt='walmart' className='clientImg'/>
            <img src={adobe} alt='adobe' className='clientImg'/>
            <img src={microsoft} alt='microsoft' className='clientImg'/>
            <img src={facebook} alt='facebook' className='clientImg'/>
        </div> */}

            
        <div id='Contacts'>
            <h1 className='ContactpageTitle'>Contact me</h1>
            <span className='contactDesc'>please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' action="" ref={form} onSubmit={sendEmail}>
                <input type="text"  placeholder='Your Name' className="name" name='name' required></input>
                <input type="email"  placeholder='Your Email' className="name" name='email' required></input>
                <textarea  rows="5" placeholder='Your Message' className="name" name="message"  required></textarea>
                <button className='submitbtn' type="submit" value="send">submit</button>

                <div className='links'>
                    <img src={fbicon} alt="facebook " className="link"></img>
                    <img src={ticon} alt="twitter " className="link"></img>
                    <img src={yticon} alt="youtube " className="link"></img>
                    <img src={instaicon} alt="instagram " className="link"></img>
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Client
