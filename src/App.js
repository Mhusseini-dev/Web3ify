import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './App.css';
import logo from './logo.png';

function App() {
    return (
        <div className="App">
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} width={100} height={100} alt="logo" />
                </div>
                <ul className="navbar-links">
                    <motion.li whileHover={{ scale: 1.1, rotate: 0.1 }} transition={{ duration: 0.3 }}>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1, rotate: 0.1 }} transition={{ duration: 0.3 }}>
                        <Link to="how-it-works" smooth={true} duration={500}>How It Works</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1, rotate: 0.1 }} transition={{ duration: 0.3 }}>
                        <Link to="features" smooth={true} duration={500}>Features</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1, rotate: 0.1 }} transition={{ duration: 0.3 }}>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </motion.li>
                </ul>
            </nav>

            <section className="hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="hero-title"
                    >
                        Welcome to Web3ify
                    </motion.h1>
                    <motion.p
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="hero-description"
                    >
                        Transforming your Web2 apps into the decentralized future of Web3.
                    </motion.p>
                    <Link to="about" smooth={true} duration={500}>
                        <motion.button
                            className="cta-button"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            Get Started
                        </motion.button>
                    </Link>
                </div>
            </section>

            <motion.section id="about" className="about">
                <h2>About Web3ify</h2>
                <p>
                    At Web3ify, we believe in the future of decentralized applications.
                    We're here to help you take your Web2 apps into the Web3 world, with
                    blockchain-backed solutions that enhance security, transparency, and
                    user ownership.
                </p>
            </motion.section>

            <motion.section id="how-it-works" className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="step"
                    >
                        <h3>Step 1: Analyze</h3>
                        <p>We analyze your app's architecture and needs.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="step"
                    >
                        <h3>Step 2: Design</h3>
                        <p>We create a Web3 blueprint to integrate decentralized technologies.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="step"
                    >
                        <h3>Step 3: Deploy</h3>
                        <p>Your app is deployed to the blockchain, ready for Web3!</p>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section id="features" className="features">
                <h2>Features</h2>
                <ul>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        Seamless Blockchain Integration
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        Robust Security with Smart Contracts
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        Decentralized User Ownership
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        Scalable Web3 Solutions
                    </motion.li>
                </ul>
            </motion.section>

            <motion.section id="contact" className="contact">
                <h2>Contact Us</h2>
                <Link to="hero" smooth={true} duration={500}>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        Reach Out
                    </motion.button>
                </Link>
            </motion.section>
        </div>
        
    );
}

export default App;
