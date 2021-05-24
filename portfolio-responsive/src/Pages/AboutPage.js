import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={"About Me"} span={"<About Me />"} />
            <ImageSection />
            <Tittle title={"My Skills"} span={"My Skills"} />
            <div className="skillsContainer">
                <SkillsSection skill={"HTML"} progress={"80%"} width={"80%"} />
                <SkillsSection skill={"CSS"} progress={"75%"} width={"75%"} />
                <SkillsSection
                    skill={"Bootstrap"}
                    progress={"60%"}
                    width={"60%"}
                />
                <SkillsSection
                    skill={"Material-UI"}
                    progress={"60%"}
                    width={"60%"}
                />
                <SkillsSection
                    skill={"Javascript"}
                    progress={"70%"}
                    width={"70%"}
                />
                <SkillsSection
                    skill={"React Js"}
                    progress={"70%"}
                    width={"70%"}
                />
                <SkillsSection
                    skill={"Node Js"}
                    progress={"30%"}
                    width={"30%"}
                />
                <SkillsSection
                    skill={"Nest Js"}
                    progress={"40%"}
                    width={"40%"}
                />
            </div>
        </div>
    );
}

export default AboutPage;
