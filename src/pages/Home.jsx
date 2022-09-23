import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import './Home.css';
import Description from "../components/Description";
import Tech from "../components/Tech";
import Timeline from "../components/Timeline";
import FutureAndPassion from "../components/FutureAndPassion";
import Contact from "../components/Contact";

const Home = () => {

    const arrowMove = (e) => {
        switch (e.keyCode) {
            case 37:
                window.fullpage_api.moveSlideLeft();
                break;
            case 38:
                window.fullpage_api.moveSectionUp();
                break;
            case 39:
                window.fullpage_api.moveSlideRight();
                break;
            case 40:
                window.fullpage_api.moveSectionDown();
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", arrowMove);
        return () => {
            document.removeEventListener("keydown", arrowMove);
        };
    }, []);

    return (
        <>
        <ReactFullpage 
            licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
            scrollingSpeed={700}
            keyboardScrolling={true}
            navigation

            render={({ state, fullpageApi }) => {
                
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section s1">
                            <section className="hero-container">
                                <div className="hero-content">
                                    <img 
                                        className="hero-p-img"
                                        src="https://i.imgur.com/ENWhwNV.png" 
                                        alt="profile" />
                                    <h1>Maximilian Lunde Skjønhaug</h1>
                                    <h2>Full-Stack Developer</h2>
                                    <p>
                                        React, React Native, Redux, Node.js, Express, MongoDB, Mongoose,
                                    </p>
                                </div>
                            </section>
                            <motion.button
                                // onClick={() => navigate("/main")}
                                onClick={() => fullpageApi.moveSectionDown()}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="gettoknowbutton"
                                >Get to know me 👤 →</motion.button>
                        </div>
                        <div className="section s2">
                            <div className="slide slide1">
                                <Description fullpageApi={fullpageApi} />
                            </div>
                            <div className="slide slide2">
                                <FutureAndPassion fullpageApi={fullpageApi} />
                            </div>
                        </div>
                        <div className="section s3">
                            <Tech fullpageApi={fullpageApi} />
                        </div>
                        <div className="section s4">
                            <Timeline fullpageApi={fullpageApi} />
                        </div>
                        <div className="section s5">
                            <Contact />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }
        }
        />
{/* 
        <div id='fullpage'>
            <div className="section home-container">
                <section className="hero-container">
                    <div className="hero-content">
                        <img 
                            src="https://i.imgur.com/ENWhwNV.png" 
                            alt="profile" />
                        <h1>Maximilian Lunde Skjønhaug</h1>
                        <h2>Full-Stack Developer</h2>
                        <p>
                            React, React Native, Redux, Node.js, Express, MongoDB, Mongoose,
                        </p>
                    </div>
                </section>
                <div className="section landing-content">
                    <div className="slide">  
                        <motion.button
                            onClick={() => navigate("/main")}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="gettoknowbutton"
                            >Get to know me 👤 →</motion.button>
                    </div>
                    <div className="slide">
                        <Description />
                    </div>
                </div>
            </div>
        </div> */}
        </>
    );
}

export default Home;