import React from 'react';
import './Home.css';
import { Grid, Divider } from '@geist-ui/react';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectCardSmall from '../ProjectCard/ProjectCard-Small';

import amazonClone from '../../img/Amazon-Clone.png';
import covidTracker from '../../img/COVID-19-Tracker.png';
import movieDatabase from '../../img/Movie-Database.png';
import airbnbClone from '../../img/Airbnb-Clone.png';

function Home(props) {
    return (
        <div className="home">
            <Grid.Container gap={5} justify="center">
                <Grid xs={12}>
                    <a href="https://ecomm-clone-8906a.web.app/home" target="_blank" rel="noopener noreferrer">
                        <ProjectCard theme={props.theme} src={amazonClone} url="amazon-clone"/>
                    </a>
                </Grid>

                <Grid xs={12}>
                    <a href="https://covid19-tracker-arama.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <ProjectCard theme={props.theme} src={covidTracker} url="covid19-tracker"/>
                    </a>
                </Grid>

                <Grid xs={12}>
                    <a href="https://hulu-clone-arama.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <ProjectCard theme={props.theme} src={movieDatabase} url="movie-database"/>
                    </a>
                </Grid>

                <Grid xs={12}>
                    <a href="https://airbnb-clone-arama.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <ProjectCard theme={props.theme} src={airbnbClone} url="airbnb-clone"/>
                    </a>
                </Grid>
            </Grid.Container>

            <Divider volume={2} y={7} type="success">OTHER PROJECTS</Divider>

            <Grid.Container gap={2} justify="center">
                <Grid xs={8}>
                    <a href="https://github.com/ashish-rama/InteriAR-Swift" target="_blank" rel="noopener noreferrer">
                        <ProjectCardSmall theme={props.theme} title="InteriAR-iOS" content="Interior design in augmented reality."/>
                    </a>
                </Grid>
                <Grid xs={8}>
                    <a href="https://github.com/ashish-rama/Hamp-Hack-Hackathon-2017-Antarctic-Rover" target="_blank" rel="noopener noreferrer">
                        <ProjectCardSmall theme={props.theme} title="Hamp Hack Hackathon" content="Autonomous Antarctic rover tech."/>
                    </a>
                </Grid>
                <Grid xs={8}>
                    <a href="https://github.com/ashish-rama/Secure-Journal-Java" target="_blank" rel="noopener noreferrer">
                        <ProjectCardSmall theme={props.theme} title="Secure Journal" content="Password protected journaling app."/>
                    </a>
                </Grid>
                <Grid xs={8}>
                    <a href="https://github.com/ashish-rama/Natural-Language-Processing-Java-Python" target="_blank" rel="noopener noreferrer">
                        <ProjectCardSmall theme={props.theme} title="Yelp Review Sentiments" content="Predict Yelp ratings from reviews (NLP)."/>
                    </a>
                </Grid>
                <Grid xs={8}>
                    <a href="https://github.com/ashish-rama/Coursera-WebDev-w-React-JavaScript" target="_blank" rel="noopener noreferrer">
                        <ProjectCardSmall theme={props.theme} title="Restaurant Website" content="Business site for the restaurant industry."/>
                    </a>
                </Grid>
                {/* RuneScape Private Servers */}
            </Grid.Container>
            
        </div>
    )
}

export default Home
