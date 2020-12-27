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
    "palette": {
      "selection": "#accef7"
    },
  }

  return (
    <GeistProvider theme={{type: themeType}}>
      <CssBaseline />
      <div className="app">
        <Router>
          <Header theme={themeType} setTheme={setThemeType}/>

          <Switch>
            <Route path="/home" component={() => <Home />}/>
            <Route path="/about" component={() => <About />}/>
            <Redirect to="/home" />
          </Switch>

          <Footer />
        </Router>
      </div>
    </GeistProvider>
  );
}

export default App;
