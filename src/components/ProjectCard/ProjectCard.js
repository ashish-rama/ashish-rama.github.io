import React from 'react';
import './ProjectCard.css';
import { Image } from '@geist-ui/react';

function ProjectCard(props) {
    return (
        <div className={props.theme === 'light' ? "projectCard" : "projectCard--dark"}>
            <Image.Browser url={props.url} invert>
                <div className="img__area">
                    <Image src={props.src} />            
                </div>
            </Image.Browser>
        </div>
    )
}

export default ProjectCard
