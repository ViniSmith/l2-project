import React from "react";
import BlueButton from "../../atoms/buttons/BlueButton";
import TransparentButton from "../../atoms/buttons/TransparentButton";
import "./style.css";

const LearnMoreSection = () => {
    return (
        <section className="learn-section">
            <div className="learn-content">
                <div className="text-content">
                    <h3 className="subtitle subtitle-uppercase subtitle-learn">Overline</h3>
                    <h2 className="learn-title">Sapien ipsum scelerisque convallis fusce</h2>
                    <p>Ut amet vulputate faucibus vitae semper eget auctor.
                        Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                    <div className="buttons-learn">
                        <BlueButton text={"Get Started"}/>
                        <TransparentButton text={"Learn More"}/>
                    </div>
                </div>
                <div className="img-content">
                    <img src="/images/img-learn-section.png" alt="learn more"></img>
                </div>

            </div>
        </section>
    )
}

export default LearnMoreSection