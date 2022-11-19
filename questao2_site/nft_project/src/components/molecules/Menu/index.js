import React, { useRef } from "react";
import "./style.css";
import BlueButton from "../../atoms/buttons/BlueButton/index";
import TransparentButton from "../../atoms/buttons/TransparentButton";

const Menu = () => {

    const menu = useRef();
    const toggleMenu = (event) => {
        if (event.type === 'touchend') event.preventDefault();

        menu.current.classList.toggle("active");
    }

    return (

        <nav className="nav-menu">
            <div className="menu-logo">
                <img src="images/logo.svg" alt="logo"></img>
            </div>

            <div className="menu-container" ref={menu}>
                <ul className="menu">
                    <li><a href="#" target="_blank">Auctions</a></li>
                    <li><a href="#" target="_blank">Roadmap</a></li>
                    <li><a href="#" target="_blank">Discover</a></li>
                    <li><a href="#" target="_blank">Community</a></li>

                    <div className="buttons buttons-menu-mobile">
                        <TransparentButton text={"Contact"} />
                        <BlueButton text={"My Account"} />
                    </div>
                </ul>
            </div>

            <button className="button-mobile" onClick={toggleMenu} onTouchEnd={toggleMenu}>
                <span className="burguer" />
            </button>

            <div className="buttons buttons-menu-desktop">
                <TransparentButton text={"Contact"} />
                <BlueButton text={"My Account"} />
            </div>
        </nav>
    )
}

export default Menu;