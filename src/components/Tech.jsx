import React from "react";
import { motion } from "framer-motion";

export default function Tech({ fullpageApi }) {
    return (
        <div className="content-container">
            <h1 className="tech-title">Technologies</h1>
            <h2>JavaScript</h2>
            <h2>Node.js</h2>
            <h2>React</h2>
            <h2>React Native</h2>
            <motion.button
                onClick={() => fullpageApi.moveSectionDown()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="gettoknowbutton nav-button"
                >Timeline 🧶 ↓</motion.button>
        </div>
    )
}