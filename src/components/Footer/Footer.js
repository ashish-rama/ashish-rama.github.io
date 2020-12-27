import React from 'react';
import './Footer.css';
import * as Icon from '@geist-ui/react-icons'
import { useTheme } from '@geist-ui/react';

function Footer() {

    const { palette } = useTheme();

    return (
        <div className="footer" style={{"background" : palette.accents_1, "border-top": "1px solid #EAEAEA"}}>
            <div className="footer__title">
                <h5>Let's Connect!</h5>
            </div>
        </div>
    )
}

export default Footer
