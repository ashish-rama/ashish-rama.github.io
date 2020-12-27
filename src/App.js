import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/home" component={() => <Home />}/>
          <Route path="/about" component={() => <About />}/>
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
