import React, { useEffect } from "react";
import "./Home.css";
import LayoutMain from "../Layout/LayoutMain";
import CarruselCity from "../../component/main/carrusel-city/CarruselCity";
import Button from 'react-bootstrap/Button';

const Home = () => {
    useEffect(() => {
        const letters = document.querySelectorAll(".hero-name .letter");
        letters.forEach((letter) => {
            letter.addEventListener("mouseover", () => {
                letter.style.fontSize = "40px";
                letter.style.color = "rgb(255, 145, 0)";
            });
            letter.addEventListener("mouseout", () => {
                letter.style.fontSize = "";
                letter.style.color = "";
            });
        });
    }, []);

    return (
        <LayoutMain>
            <h1 className="hero-name">
                <span className="letter">M</span>
                <span className="letter">y</span>
                <span className="letter">T</span>
                <span className="letter">i</span>
                <span className="letter">n</span>
                <span className="letter">e</span>
                <span className="letter">r</span>
                <span className="letter">a</span>
                <span className="letter">r</span>
                <span className="letter">y</span>
            </h1>
            <p className="hero-parrafo">
                "Find your perfect trip, designed by insiders who know and love their cities!"
            </p>
            <Button className="booton-call" variant="dark">CLICK HERE</Button>
            
            <CarruselCity/>
        </LayoutMain>
    );
};

export default Home;

