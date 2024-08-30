import React from 'react';
import './styles.css';
import Github from '../../assets/github-mark-white.png';
import Link from '../../assets/link_FILL0_wght400_GRAD0_opsz48.png';
import { Tooltip } from '@mui/material';
import homepageDarkImg from '../../assets/crypto/Homepage.png';
import HomepageMeShop from '../../assets/MeShop/Homepage.png';
import tabularfinancily from '../../assets/Financily/fin_table.png';
import { motion } from 'framer-motion';

function ProjectLandingPage() {

    const fadeIn = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } },
    };

    const slideInLeft = {
        initial: { x: -100 },
        animate: { x: 0, transition: { type: 'spring', stiffness: 50 } },
    };

    const slideInRight = {
        initial: { x: 100 },
        animate: { x: 0, transition: { type: 'spring', stiffness: 50 } },
    };

    const rotateAnimation = {
        initial: { rotate: 0 },
        animate: { rotate: 360, transition: { duration: 2, ease: 'easeInOut' } },
    };

    return (
        <motion.div className='project-page' initial="initial" animate="animate" variants={fadeIn}>
            <motion.h1 className='project-title' initial="initial" animate="animate" variants={slideInRight}>
                Projects
            </motion.h1>

            {/* Project 1 - CryptoTracker App */}
            <motion.div className='project-list' variants={fadeIn}>
                <motion.div className='project-header' variants={slideInLeft}>
                    <div className='project-link'>
                        <Tooltip placement="bottom-start" title='GitHub Link'>
                            <a href='https://github.com/aFarhin/crypto-tracker-app' target='_blank' rel="noreferrer">
                                <img src={Github} className='git-logo' alt='GitHub Link' />
                            </a>
                        </Tooltip>
                        <Tooltip placement="bottom-start" title='App Link'>
                            <a href='https://crypto-tracker-app-kappa.vercel.app/' target='_blank' rel="noreferrer">
                                <img src={Link} className='link-logo' alt='App Link' />
                            </a>
                        </Tooltip>
                    </div>
                </motion.div>
                <p className='description'>
                    • The 'CryptoTracker App' is a user-friendly platform for exploring and tracking a diverse range of cryptocurrencies. It allows users to compare different coins and curate a watchlist, keeping them informed about the dynamic crypto market.
                </p>
                <p className='description'>
                    • Toastify integration enhances user experience with notifications for smooth interaction.
                </p>
                <p className='description'>
                    • Skills Used: React, React-Router, Axios, Framer Motion, Chart JS, Local Storage, CoinGecko API
                </p>
                <motion.h2 className='features-title' variants={rotateAnimation}>
                    Features
                </motion.h2>
                <div className='project-dec-with-img'>
                    <section>
                        <Tooltip placement="top" title='Homepage in Dark Mode'>
                            <img src={homepageDarkImg} className='project-img' alt='Homepage Dark Mode' />
                        </Tooltip>
                    </section>
                </div>
            </motion.div>

            {/* Project 2 - MeShop App */}
            <motion.div className='project-list' variants={fadeIn}>
                <div className='project-header'>
                    <h5>2. MeShop App</h5>
                    <div className='project-link'>
                        <Tooltip placement="bottom-start" title='GitHub Link'>
                            <a href='https://github.com/aFarhin/ShoppingCart_App' target='_blank' rel="noreferrer">
                                <img src={Github} className='git-logo' alt='GitHub Link' />
                            </a>
                        </Tooltip>
                        <Tooltip placement="bottom-start" title='App Link'>
                            <a href='https://afarhin.github.io/ShoppingCart_App/' target='_blank' rel="noreferrer">
                                <img src={Link} className='link-logo' alt='App Link' />
                            </a>
                        </Tooltip>
                    </div>
                </div>
                <p className='description'>
                    • MeShop provides a seamless shopping experience with a variety of filters for personalized search. Users can add items to their cart and complete their orders easily.
                </p>
                <p className='description'>
                    • Built with HTML, CSS, and JavaScript, incorporating API integration and animations for an enhanced user experience.
                </p>
                <p className='description'>
                    • Skills Used: React, Axios, JavaScript, React-Icons
                </p>
                <motion.h2 className='features-title' variants={rotateAnimation}>
                    Features
                </motion.h2>
                <div className='project-dec-with-img'>
                    <section>
                        <Tooltip placement="top" title='Homepage'>
                            <img src={HomepageMeShop} className='project-img' alt='Homepage' />
                        </Tooltip>
                    </section>
                </div>
            </motion.div>

            {/* Project 3 - Financily */}
            <motion.div className='project-list' variants={fadeIn}>
                <div className='project-header'>
                    <div className='project-link'>
                        <Tooltip placement="bottom-start" title='GitHub Link'>
                            <a href='https://github.com/aFarhin/Financily' target='_blank' rel="noreferrer">
                                <img src={Github} className='git-logo' alt='GitHub Link' />
                            </a>
                        </Tooltip>
                        <Tooltip placement="bottom-start" title='App Link'>
                            <a href='https://financily-one.vercel.app/' target='_blank' rel="noreferrer">
                                <img src={Link} className='link-logo' alt='App Link' />
                            </a>
                        </Tooltip>
                    </div>
                </div>
                <p className='description'>
                    • Financily is a sophisticated personal finance app that helps users manage their income, expenses, and savings. It provides insights through an analysis dashboard and personalized expense categorization.
                </p>
                <p className='description'>
                    • Designed with React JS and Tailwind CSS, it features Firebase Authentication and Firestore Database for secure data handling.
                </p>
                <p className='description'>
                    • Skills Used: React, Tailwind CSS, Firebase, Firestore, Framer Motion
                </p>
                <motion.h2 className='features-title' variants={rotateAnimation}>
                    Features
                </motion.h2>
                <div className='project-dec-with-img'>
                    <section>
                        <Tooltip placement="top" title='Tabular Income/Expense List'>
                            <img src={tabularfinancily} className='project-img' alt='Tabular Income/Expense List' />
                        </Tooltip>
                    </section>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ProjectLandingPage;
