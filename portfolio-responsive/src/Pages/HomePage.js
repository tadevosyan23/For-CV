import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import smile from "../img/smile.png";

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Razmik Tadevosyan.</span>
                    <img src={smile} alt="smile" />
                </h1>
                <p className="h-sub-text">
                    I'm a Frontend developer. Started to study programming in
                    2017. I really love programming and I want to be useful to
                    your campany with my skills.Worked on projects written React
                    JS, Bootstrap and Material-UI.
                </p>
                <div className="icons">
                    <Link to="/" className="icon-holder">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="icon fb"
                        />
                    </Link>
                    <a
                        href="https://github.com/tadevosyan23/For-CV"
                        className="icon-holder"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <Link to="/" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
