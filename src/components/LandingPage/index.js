import React from 'react'
import './styles.css'
import SampleImage from '../../assets/self.jpeg'
import { Tooltip } from '@mui/material';

function LandingPage() {
    return (
        <>
            <div className='home'>
                <div className='home-content'>
                    <h1>Hi, I'm Ahmeda Farhin</h1>
                    <h3>FullStack Web Developer</h3>
                    <p>Hello, I am Ahmeda Farhin. Currently, I am Pursuing a Full stack web development course. Throughout this comprehensive course, I have delved into essential technologies like HTML, CSS, JavaScript,ReactJs and NodeJs. Along the way, I have successfully completed numerous projects assigned during the course and even took the initiative to work on some personal projects independently.</p>
                    <div className='btn-box'>
                    
                        <a href='/contact'>Let's Talk</a>
                    </div>
                </div>
                <div className='sample-div'>
                    <img className='sample-image' src={SampleImage} />
                </div>
            </div>
            <div class="home-sci">
                <Tooltip placement='bottom' title='Github'>
                    <a href="https://github.com/aFarhin" target="_blank"><i class='bx bxl-github'></i></a>
                </Tooltip>
                <Tooltip placement='bottom' title='Email'>
                    <a href="mailto:ahmeda.farhin28@gmail.com/" target="_blank"><span class="material-symbols-outlined">
                        mail
                    </span></a>
                </Tooltip>
                <Tooltip placement='bottom' title='Linkedin'>
                    <a href="https://www.linkedin.com/in/ahmeda-f-772002204/" target="_blank"><i class='bx bxl-linkedin' ></i></a>
                </Tooltip>
            </div>
        </>
    )
}

export default LandingPage
