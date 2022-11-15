import React from "react";
import "./style.css";
import BlueButton from "../../atoms/buttons/BlueButton/index";
import TransparentButton from "../../atoms/buttons/TransparentButton";

const Menu = () => {
    return(
        <nav>
            <div className="menu-logo">
                <img src="images/logo.svg" alt="logo"></img>
            </div>
            <div>
                <ul className="menu">
                    <li>Auctions</li>
                    <li>Roadmap</li>
                    <li>Discover</li>
                    <li>Community</li>
                </ul>
            </div>
            <div className="buttons">
                <TransparentButton text={"Contact"}/>
                <BlueButton text={"My Account"}/>
            </div>
        </nav>
    )
}

export default Menu;