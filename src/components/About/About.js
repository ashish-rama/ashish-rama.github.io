import { Text } from '@geist-ui/react';
import React from 'react';
import './About.css';
import ashish from '../../img/Ashish.jpg';

function About() {
    return (
        <div className="about">
            <div className="about__profilePicture">
                <img src={ashish}/>
            </div>
            <Text p>Hi, my name is Ashish.</Text>
            <Text p>
                I am a software engineer and a recent graduate from NYU with a double major in computer science and finance.

                From financial technology to augmented reality, I have a passion for learning about technologies and products that affect our lives. 
            </Text>
            <br/>
            <h3>Programming</h3>
            <Text p>
                I first learned how to code by making massively-multiplayer online RPG games with my childhood friends. We loved building our own worlds where thousands of players could experience the stories we were crafting. 
                <br/><br/>
                Taking this enthusiasm into college, I continued to build technical and impactful projects as I got featured in my CS courses (iOS, NLP, ML), presented at hackathons and grew financial institutions during internships.
                <br/><br/>
                I have experience with front-end development (React, JavaScript, HTML/CSS), back-end algorithms (Java, Python), iOS mobile development (Swift, Objective-C) and game development (Unity, Unreal Engine, CryEngine, C#, server-client construction in Java).
            </Text>
            <br/>
            <h3>Business</h3>
            <Text p>
                I have spent the last two years in investment banking, ensuring seamless mergers & acquisitions (M&A) for technology and media companies. I worked with CEOs, CFOs and management daily to advise on company valuations, operating models and competitive strategies while considering constraints on a number of technology and business factors.
                <br/><br/>
                Through this experience, I have gained expertise in management (projects, teams, resources), competitive business strategies (capital raises, M&A, corporate ownership) and technology product analysis.
            </Text>
            <br/>
            <h3>What's Next?</h3>
            <Text p>
                For my next position, I am looking to work more closely with technology products at a collaborative and fast-paced startup. Feel free to contact me – I love to speak about my previous projects and future work opportunities!
            </Text>
        </div>
    )
}

export default About
