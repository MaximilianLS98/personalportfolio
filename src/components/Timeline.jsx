import React from "react";
import { motion } from "framer-motion";

export default function Timeline({ fullpageApi }) {
    return (
        <div className="content-container">
            <h1 className="timeline-title">Timeline</h1>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-item-content">
                        <span className="tag" style={{ background: "rgb(255, 0, 0)" }}>2019</span>
                        <h2>Full-stack consultant at SALT</h2>
                        <p>
                            I am currently working as a full-stack consultant at <a href="https://www.salt.study">SALT</a>.
                            I am passionate about creating beautiful and functional web applications.
                            I have a background in graphic design and have worked with
                            companies such as <a href="https://www.vegvesen.no/">Vegvesen</a> and <a href="https://www.vegvesen.no/">Norsk Hydro</a>.
                            I am currently working as a full-stack consultant at <a href="https://www.salt.study">SALT</a>.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-content">
                        <span className="tag" style={{ background: "rgb(255, 0, 0)" }}>2019</span>
                        <h2>Full-stack consultant at SALT</h2>
                        <p>
                            I am currently working as a full-stack consultant at <a href="https://www.salt.study">SALT</a>.
                            I am passionate about creating beautiful and functional web applications.
                            I have a background in graphic design and have worked with
                            companies such as <a href="https://www.vegvesen.no/">Vegvesen</a> and <a href="https://www.vegvesen.no/">Norsk Hydro</a>.
                            I am currently working as a full-stack consultant at <a href="https://www.salt.study">SALT</a>.
                        </p>
                    </div>
                </div>
                </div>
                <motion.button
                    onClick={() => fullpageApi.moveSectionDown()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="gettoknowbutton nav-button"
                    >Talk to me 📞 ↓</motion.button>
            </div>
    )
}