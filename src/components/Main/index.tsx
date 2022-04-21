import React, {useEffect} from 'react';
import './style.sass';
import HeaderImg from '../../styling/img/image.svg'
import Skills from "../Skills";
import Porftolio from '../../styling/img/portfolio.svg';
import PortfolioFile from '../../styling/porfolioFile.pdf';
import Project from "../Project";
import { objectProject } from '../../helps';
import Experience from '../../styling/img/experience.svg';
import GitHub from '../../styling/img/github.svg'
import PorftolioMenu from '../../styling/img/portfolioMenu.svg'
import SkillsMenu from '../../styling/img/skills.svg'
import {Link} from 'react-scroll'

const Main: React.FC = () => {
    const [background, setBackground] = React.useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setBackground(false)
        },7000)
    },[])
    return (
        <div className='main'>
            {background ?
                <div className="container">
                    <div className="box"></div>
                </div>
                :
                <>
                    <div className="main_header-menu">
                        <Link to='experience' smooth={true} spy={true} offset={-100} duration={500}><img
                            src={Experience} alt=""/></Link>
                        <Link to='skills' smooth={true} spy={true} offset={-100} duration={500}><img src={SkillsMenu}
                                                                                                     alt=""/></Link>
                        <Link to='portfolio' smooth={true} offset={-100} duration={500}><img src={PorftolioMenu}
                                                                                             alt=""/></Link>
                        <Link to='github' smooth={true} offset={-100} duration={500}><img src={GitHub} alt=""/></Link>
                    </div>
                    <div className="main_header">
                        <div className="main_header-img">
                            <img src={HeaderImg}/>
                        </div>
                        <div className="main_header-text">
                            <h1>Кристина Ворожейкина</h1>
                            <div className="main_header-p">Frontend Developer</div>
                            <div className="main_header-text-flex">
                                <p>Телефон: <a href='tel:+79138846966'>+79138846966</a></p>
                                <p>Email: <a
                                    href='mailto:kristina.vorojejkina@yandex.ru'>kristina.vorojejkina@yandex.ru</a></p>
                            </div>
                        </div>
                    </div>
                    <div id='experience' className="main_content">
                        <div className="main_content-left">
                            <div className="main_education">
                                <h1>Education</h1>
                                <p>2020-2025 <span>ТУСУР - программная инженерия</span></p>
                            </div>
                            <div className="main_hobbies">
                                <h1>Hobbies</h1>
                                <ul>
                                    <li>Путешествие</li>
                                    <li>3д моделирование</li>
                                    <li>Дизайн</li>
                                </ul>
                            </div>
                        </div>
                        <div className="main_content-right">
                            <div className="main_experience">
                                <h1>Experience</h1>
                                <div className="main_experience-flex">
                                    <div className="main_date">
                                        Июнь 2021 — по настоящее время <span>Quasar</span>
                                    </div>
                                    <div className="main_experience-about">
                                        <div className="main_title">
                                            Junior Frontend dev
                                        </div>
                                        <p>Работа с React, создание компонентов,
                                            интегрирование api, верстка с нуля, написание ts функций, исправление
                                            багов.</p>
                                    </div>
                                </div>
                                <div className="main_experience-flex main_experience-lastChild">
                                    <div className="main_date">
                                        Апрель 2021 — июнь 2021 <span>RG3</span>
                                    </div>
                                    <div className="main_experience-about">
                                        <div className="main_title">
                                            HTML - верстальщик
                                        </div>
                                        <p>Исправление багов, верстка с нуля, редактирование JS скриптов и их написание.
                                            Трекинг выполнения задач, и их декомпозирование.</p>
                                    </div>
                                </div>
                            </div>
                            <div id='skills' className="main_skills">
                                <h1>Skills</h1>
                                <div className="skills_flex">
                                    <Skills skillsName='JavaScript' dotsStyleFirst dotsStyleTwo/>
                                    <Skills skillsName='React' dotsStyleFirst dotsStyleTwo dotsStyleThree/>
                                    <Skills skillsName='Html' dotsStyleFirst dotsStyleTwo dotsStyleThree/>
                                    <Skills skillsName='Css' dotsStyleFirst dotsStyleTwo dotsStyleThree/>
                                    <Skills skillsName='TypeScript' dotsStyleFirst dotsStyleTwo/>
                                    <Skills skillsName='MobX'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_footer">
                        <div id='portfolio' className="main_portfolio">
                            <h1>Portfolio</h1>
                            <a href={PortfolioFile} target='_blank' download><img src={Porftolio} alt="Porftolio"/>Скачать</a>
                        </div>
                        <div id='github' className="main_project">
                            <h1>Project</h1>
                            <div className="main_project-flex">
                                {
                                    objectProject?.map((value) =>
                                        <Project title={value.title} src={value.src} git={value.git}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Main;