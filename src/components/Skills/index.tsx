import React from 'react';

interface ISkills {
    skillsName: string,
    dotsStyleFirst?: boolean,
    dotsStyleTwo?: boolean,
    dotsStyleThree?: boolean
}
const Skills: React.FC <ISkills> = (props) => {
    return (
        <div className='skills'>
            <p>{props.skillsName}</p>
            <div className='dotsActive'></div>
            <div className={props.dotsStyleFirst ? 'dotsActive' : 'dots'}></div>
            <div className={props.dotsStyleTwo ? 'dotsActive' : 'dots'}></div>
            <div className={props.dotsStyleThree ? 'dotsActive' : 'dots'}></div>
        </div>
    );
};

export default Skills;
