import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import './Header.css';

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className="headerContainer">
            <motion.img 
                onClick={() => navigate('/')}
                whileHover={{ scale: 1.1 }} 
                className="headerimg" src="https://i.imgur.com/ENWhwNV.png" 
                alt="profile" />
            <h1 className="headerTitle">Maximilian Skjønhaug</h1>
        </header>
    );
}

export default Header;