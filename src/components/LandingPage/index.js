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
  I am a dedicated Frontend Software Developer with experience at Synechron and a solid foundation from one year of Full Stack Web Development training at Acciojob. My expertise lies in creating intuitive user interfaces and optimizing performance. I am passionate about turning complex challenges into elegant solutions, combining creativity and technical skill to deliver seamless user experiences.
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
