import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const[themeType, setThemeType] = useState('light');

  const myTheme = {
    type: `${themeType}`,
    palette: {
      selection: "#accef7",
    },
  }

  return (
    <GeistProvider theme={myTheme}>
      <CssBaseline />
      <div className="app">
        <Router>
          <Switch>
            <Route path="/home">
              <Header theme={themeType} setTheme={setThemeType}/>
              <Home theme={themeType}/>
            </Route>
            <Route path="/about">
              <Header theme={themeType} setTheme={setThemeType}/>
              <About />
            </Route>
            <Redirect to="/home" />
          </Switch>

          <Footer />
        </Router>
      </div>
    </GeistProvider>
  );
}

export default App;
