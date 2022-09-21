import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../components/Header";
import Tech from "../components/Tech";
import Description from "../components/Description";
import FutureAndPassion from "../components/FutureAndPassion";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import './Main.css';

export default function Main() {
    return (
        <>
            <Header />
            <Description />
            <Tech />
            <Timeline />
            <FutureAndPassion />
            <Contact />
        </>
    )
}