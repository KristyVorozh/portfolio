import React from 'react';
import { projectType } from '../../helps/index'

const Project: React.FC <projectType> = (props) => {
    return (
        <div className='main_box'>
            <h3>{props.title}</h3>
            <div className="project_box">
                <a target='_blank' href={props.src}>Перейти</a>
            </div>
            {props.git &&
                <p>GitHub: <a target='_blank' href={props.git}>{props.git}</a> </p>
            }
        </div>
    );
};

export default Project;
