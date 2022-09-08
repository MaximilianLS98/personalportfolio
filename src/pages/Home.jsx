import React from "react";
import Hero from "../components/Hero";
import './Home.css';

const Home = () => {

    return (
        <>
            {/* <Hero /> */}
            <section className="hero-container">
                <div className="hero-content">
                    <img src="https://avatars.githubusercontent.com/u/49490417?s=400&u=ed411bac6ae798c2fb217e116b342a3c03c8f040&v=4" alt="profile" />
                    <h1>Maximilian Lunde Skjønhaug</h1>
                    <h2>Full-Stack Developer</h2>
                    <p>
                        React, React Native, Redux, Node.js, Express, MongoDB, Mongoose,
                    </p>
                </div>
            </section>
            <h1>Home</h1>
            <main className="landing-content">
                <h1>My portfolio is currently undergoing construction!</h1>
                <h2>Come back at a later time...</h2>
            </main>
        </>
    );
}

export default Home;