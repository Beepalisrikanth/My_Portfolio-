import React from 'react'
import './skill.css'

// images
import python from "../../assests/logoPython.png";
import js from "../../assests/logoJavaScript.png";
import ts from "../../assests/logoTypeScript.png";
import css from "../../assests/logoCSS.png";
import html from "../../assests/logoHtml.png";
import react from "../../assests/logoReact.png";
import mvc from "../../assests/logoMvc.png";
import bs from "../../assests/logobootstrap.png";
import node from "../../assests/logoNodeJs.png";
import express from "../../assests/logoExpress.png";
import api from "../../assests/logoApi.png";
import jwt from "../../assests/logoJwt.png";
import mysql from "../../assests/logoMysql.png";
import mongo from "../../assests/logoMongoDB.png";
import git from "../../assests/logoGit.png";
import github from "../../assests/logoGithub.png";
import vscode from "../../assests/logoVscode.png";
import postman from "../../assests/logoPostman.png";
import thunder from "../../assests/logoThunder.png";
import tailwind from "../../assests/logoTailwind.png";


// import sql from "../../assests/logoSql.png";
// import crud from "../../assests/logoCrud.png";
// import c from "../../assests/logoC.png";

const Skill = () => {
    return (
        <section id="skills">

            <span className='skillTitle'>What I do</span>

            <span className='skiilDescrib'>
                I am a passionate Full Stack Web Developer with hands-on experience in building modern web applications using the MERN stack (MongoDB, Express, React, Node.js) and TypeScript.<br/><br/>

                I specialize in creating clean, responsive user interfaces with Tailwind CSS and developing secure, scalable backends with JWT authentication and role-based access. I also enjoy integrating emerging technologies like TensorFlow.js for real-time AI directly in the browser.<br/><br/>

                Currently open to internships and junior full-stack developer roles (Hyderabad / Remote).
            </span>

            <div className='skillcards'>

                {/* Languages */}
                <div className='skillcard'>
                    <h1 className='categories'>Languages</h1>
                    <div className='subskills'>
                        <span className='subskill'><img src={js} /><p>JavaScript</p></span>
                        <span className='subskill'><img src={ts} /><p>TypeScript</p></span>
                        <span className='subskill'><img src={python} /><p>Python</p></span>
                        {/* <span className='subskill'><img src={c} /><p>C (Basics)</p></span> */}
                    </div>
                </div>

                {/* Frontend */}
                <div className='skillcard'>
                    <h1 className='categories'>Frontend Development</h1>
                    <div className='subskills'>
                        <span className='subskill'><img src={react} /><p>React.js</p></span>
                        <span className='subskill'><img src={tailwind} /><p>tailwind</p></span>
                        <span className='subskill'><img src={bs} /><p>Bootstrap</p></span>
                        <span className='subskill'><img src={html} /><p>HTML5</p></span>
                        <span className='subskill'><img src={css} /><p>CSS3</p></span>
                    </div>
                </div>

                {/* Backend */}
                <div className='skillcard'>
                    <h1 className='categories'>Backend Development</h1>
                    <div className='subskills'>
                        <span className='subskill'><img src={node} /><p>Node.js</p></span>
                        <span className='subskill'><img src={express} /><p>Express.js</p></span>
                        <span className='subskill'><img src={api} /><p>REST APIs</p></span>
                        <span className='subskill'><img src={jwt} /><p>JWT Auth</p></span>
                        <span className='subskill'><img src={mvc} /><p>MVC</p></span>
                        {/* <span className='subskill'><img src={crud} /><p>CRUD</p></span> */}
                    </div>
                </div>

                {/* Databases */}
                <div className='skillcard'>
                    <h1 className='categories'>Databases</h1>
                    <div className='subskills'>
                        <span className='subskill'><img src={mysql} /><p>MySQL</p></span>
                        <span className='subskill'><img src={mongo} /><p>MongoDB</p></span>
                        {/* <span className='subskill'><img src={sql} /><p>PL/SQL</p></span> */}
                    </div>
                </div>

                {/* Tools */}
                <div className='skillcard'>
                    <h1 className='categories'>Tools & Platforms</h1>
                    <div className='subskills'>
                        <span className='subskill'><img src={git} /><p>Git</p></span>
                        <span className='subskill'><img src={github} /><p>GitHub</p></span>
                        <span className='subskill'><img src={vscode} /><p>VS Code</p></span>
                        <span className='subskill'><img src={postman} /><p>Postman</p></span>
                        <span className='subskill'><img src={thunder} /><p>Thunder Client</p></span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skill