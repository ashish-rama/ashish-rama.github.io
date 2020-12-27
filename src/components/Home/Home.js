import React from 'react';
import './Home.css';
import { Card, Grid, Image } from '@geist-ui/react';
import covidTracker from '../../img/COVID-Tracker.png';

function Home() {
    return (
        <div className="home">
            <Grid.Container gap={5} justify="center">
                <Grid xs={12}><Card shadow style={{width: '100%', height: '300px'}}><Image src={covidTracker}/></Card></Grid>
                <Grid xs={12}><Card shadow style={{width: '100%', height: '300px'}}></Card></Grid>
                <Grid xs={12}><Card shadow style={{width: '100%', height: '300px'}}></Card></Grid>
                <Grid xs={12}><Card shadow style={{width: '100%', height: '300px'}}></Card></Grid>
            </Grid.Container>
            
        </div>
    )
}

export default Home
