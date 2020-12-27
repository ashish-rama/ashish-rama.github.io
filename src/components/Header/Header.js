import React from 'react';
import { Link } from 'react-router-dom';
import { Toggle, Spacer, Button } from '@geist-ui/react';
import { Sun, Moon } from '@geist-ui/react-icons';
import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <div className="header__banner">
                <div className="header__name">
                    <h3>Ashish Ramachandran</h3>
                </div>
                <div className="header__nav">
                    <div className="header__navItem"><Link to="/home">Home</Link></div>
                    <div className="header__lastNavItem"><Link to="/about">About</Link></div>
                </div>
            </div>
            <div className="header__banner">
                <div className="header__nameSub">
                    <h5>Software Engineer</h5>
                </div>
                <div className="header__darkModeSwitch">
                    <Moon size={20} />
                    <Spacer inline x={.7} />
                    <Toggle initialChecked onChange={() => {props.setTheme(props.theme === 'dark' ? 'light' : 'dark')}}/>
                    <Spacer inline x={.7} />
                    <Sun size={20} />
                </div>
            </div>
        </div>
    )
}

export default Header
