import React from 'react';
import './Footer.css';
import * as Icon from '@geist-ui/react-icons'
import { Spacer, useTheme } from '@geist-ui/react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

function Footer(props) {
    const { palette } = useTheme();

    return (
        <div className="footer" style={{"background" : palette.accents_1, "border-top": `1px solid ${palette.accents_2}`}}>
            <div className="footer__title">
                <h5 >Let's Connect!</h5>
            </div>
            <div className={props.theme === 'light' ? "footer__socials" : "footer__socials--dark"}>
                <a href="mailto:ashishramachandran804@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MailIcon /> <Spacer inline x={.35} />
                </a>
                
                <a href="https://github.com/ashish-rama/" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon /> <Spacer inline x={.35} />
                </a>

                <a href="https://www.linkedin.com/in/ashishramachandran/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
            </div>
            <div className="footer__copyright">
                <span style={{"color" : palette.accents_5}}>Copyright © 2021 Ashish Ramachandran. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer
