import React from 'react';
import './Home.css';
import { Card, Grid } from '@geist-ui/react';

function Home() {
    return (
        <div className="home">
            <Grid.Container gap={5} justify="center">
                <Grid xs={12}><Card shadow style={{width: '100%', height: '100%'}}></Card></Grid>
                <Grid xs={12}><Card shadow style={{width: '100%', height: '100%'}}></Card></Grid>
                <Grid xs={12}><Card shadow style={{width: '100%', height: '100%'}}></Card></Grid>
                <Grid xs={12}><Card shadow style={{width: '100%', height: '100%'}}></Card></Grid>
            </Grid.Container>
            
        </div>
    )
}

export default Home
