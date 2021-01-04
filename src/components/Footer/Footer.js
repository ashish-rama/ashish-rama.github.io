import React from 'react';
import './Footer.css';
import * as Icon from '@geist-ui/react-icons'
import { useTheme } from '@geist-ui/react';

function Footer() {
    const { palette } = useTheme();
    
    return (
        <div className="footer" style={{"background" : palette.accents_1, "border-top": `1px solid ${palette.accents_2}`}}>
            <div className="footer__title">
                <h3 style={{"font-size" : "0.875rem", "font-weight": "400"}}>Let's Connect!</h3>
            </div>
        </div>
    )
}

export default Footer
