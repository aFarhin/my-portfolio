import React from 'react';
import './styles.css';
import SampleImage from '../../assets/self.jpeg';
import { Tooltip } from '@mui/material';

function LandingPage() {
    return (
        <>
            <div className='home'>
                <div className='home-content'>
                    <h1 className='title'>Hello, I'm Farhin</h1>
                    <h3 className='subtitle'>Frontend Software Developer</h3>
                    <p className='description'>
                        I'm a passionate Frontend Software Developer currently contributing to innovative projects at Synechron. 
                        With a solid foundation from my one-year Full Stack Web Development training at Acciojob, I've honed my skills in both frontend and backend technologies. 
                        I specialize in crafting seamless user experiences, combining creativity with code to bring ideas to life. 
                        From building intuitive interfaces to optimizing performance, I thrive on turning complex challenges into elegant solutions.
                    </p>
                    <div className='btn-box'>
                        <a className='cta-btn' href='/contact'>Let's Collaborate</a>
                        <span style={{padding:"2rem"}}></span>
                        <a className='cta-btn' href='/works'>View Projects</a>
                    </div>
                </div>
                <div className='image-div'>
                    <img className='profile-image' src={SampleImage} alt="Ahmeda Farhin" />
                </div>
            </div>
            <div className='social-links'>
                <Tooltip placement='bottom' title='GitHub'>
                    <a href="https://github.com/aFarhin" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github social-icon'></i>
                    </a>
                </Tooltip>
                <Tooltip placement='bottom' title='Email'>
                    <a href="mailto:ahmeda.farhin28@gmail.com" target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined social-icon">mail</span>
                    </a>
                </Tooltip>
                <Tooltip placement='bottom' title='LinkedIn'>
                    <a href="https://www.linkedin.com/in/ahmeda-f-772002204/" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-linkedin social-icon'></i>
                    </a>
                </Tooltip>
            </div>
        </>
    );
}

export default LandingPage;
