import React from "react";
import { motion } from "framer-motion";

export default function FutureAndPassion({ fullpageApi }) {
    return (
        <div className="content-container">
            <h1 className="future-and-passion-title">Future and Passion</h1>
            <p className="future-and-passion-text">
                I am currently working as a full-stack consultant at <a href="https://www.salt.study">SALT</a>.
                I am passionate about creating beautiful and functional web applications.
                I have a background in graphic design and have worked with
                companies such as <a href="https://www.vegvesen.no/">Vegvesen</a> and <a href="https://www.vegvesen.no/">Norsk Hydro</a>.
                I am currently working as a full-stack consultant at <a href="https://www.salt.study">SALT</a>.
            </p>
            <motion.button
                onClick={() => fullpageApi.moveSectionDown()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="gettoknowbutton nav-button"
                >Tech stack 💻 ↓</motion.button>
        </div>
    )
}