import React from 'react';
import { Link } from 'react-router-dom';
import { Toggle, Spacer, useTheme } from '@geist-ui/react';
import { Sun, Moon } from '@geist-ui/react-icons';
import './Header.css';

function Header(props) {

    const { palette } = useTheme();
    
    return (
        <div className="header">
            <div className="header__banner">
                <div className="header__name">
                    <h3>Ashish Ramachandran</h3>
                </div>
                <div className={props.theme === "dark" ? "header__nav--dark active" : "header__nav active"}>
                    <div className="header__navItem"><Link style={window.location.pathname === "/home" ? {"color": palette.foreground } : {"color": palette.accents_3 }} to="/home">Home</Link></div>
                    <div className="header__lastNavItem"><Link style={window.location.pathname === "/about" ? {"color": palette.foreground } : {"color": palette.accents_3 }} to="/about">About</Link></div>
                </div>
            </div>
            <div className="header__banner">
                <div className="header__nameSub">
                    <h5>Software Engineer</h5>
                </div>
                <div className="header__darkModeSwitch">
                    <Moon size={16} />
                    <Spacer inline x={.35} />
                    <Toggle size="small" initialChecked onChange={() => {props.setTheme(props.theme === 'dark' ? 'light' : 'dark')}}/>
                    <Spacer inline x={.35} />
                    <Sun size={16} />
                </div>
            </div>
        </div>
    )
}

export default Header
