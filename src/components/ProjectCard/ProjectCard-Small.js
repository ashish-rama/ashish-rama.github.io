import React from 'react';
import './ProjectCard-Small.css';
import { Description } from '@geist-ui/react';

function ProjectCardSmall(props) {
    return (
        <div className={props.theme === 'light' ? "projectCardSmall" : "projectCardSmall--dark"}>
            <Description title={props.title} content={
                <p>{props.content}</p>
            } />
        </div>
    )
}

export default ProjectCardSmall
