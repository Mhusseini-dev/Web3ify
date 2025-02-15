import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import "./App.css";
import logo from "./logo.png";
import Web33 from "./components/Web33";

function Home() {
  return (
    <div className="App">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} width={100} height={100} alt="logo" />
        </div>
        <ul className="navbar-links">
          {/* ✅ Use react-scroll for same-page links */}
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <ScrollLink to="how-it-works" smooth={true} duration={500}>
              How It Works
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <ScrollLink to="features" smooth={true} duration={500}>
              Features
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </motion.li>
        </ul>
      </nav>

      {/* ✅ Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            Welcome to Web3ify
          </motion.h1>
          <motion.p initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
            Transforming your Web2 apps into the decentralized future of Web3.
          </motion.p>
          {/* ✅ Use React Router's Link for page navigation */}
          <Link to="/Web33">
            <motion.button className="cta-button" whileHover={{ scale: 1.1, rotate: 10 }} transition={{ duration: 0.3 }}>
              Get Started
            </motion.button>
          </Link>
        </div>
      </section>

      {/* ✅ Other Sections (Use `id` for react-scroll) */}
      <motion.section id="about" className="about">
        <h2>About Web3ify</h2>
        <p>We help transition Web2 apps into Web3 with decentralized solutions.</p>
      </motion.section>

      <motion.section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="step">
            <h3>Step 1: Analyze</h3>
            <p>We analyze your app's architecture.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="step">
            <h3>Step 2: Design</h3>
            <p>We create a Web3 integration plan.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="step">
            <h3>Step 3: Deploy</h3>
            <p>Your app goes live on the blockchain!</p>
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
            Smart Contract Security
          </motion.li>
        </ul>
      </motion.section>

      <motion.section id="contact" className="contact">
        <h2>Contact Us</h2>
        <ScrollLink to="hero" smooth={true} duration={500}>
          <motion.button className="cta-button" whileHover={{ scale: 1.1, rotate: 10 }} transition={{ duration: 0.3 }}>
            Reach Out
          </motion.button>
        </ScrollLink>
      </motion.section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Web33" element={<Web33 />} />
      </Routes>
    </Router>
  );
}

export default App;
