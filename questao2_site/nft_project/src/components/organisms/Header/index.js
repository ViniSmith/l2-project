import React from "react";
import Menu from "../../molecules/Menu";
import "./style.css";

const Header = () => {
    return(
        <header className="bodyHeader">
            <Menu/>
            <div className="content">
                    <h2 className="subtitle">Non Fungible Tokens</h2>
                    <div className="titlesContainer">
                        <div className="titles firstTitle">
                            <h1>A new NFT</h1>
                            <img src="images/title-img.svg" alt="logo"></img>
                        </div>
                        <div className="titles secondTitle">
                            <img src="images/title-img2.svg" alt="logo"></img>
                            <h1>Experience</h1>
                        </div>
                    </div>
                    <h2 className="subtitle">Discover, collect and sell</h2>
            </div>
            <div className="footerH">
                <ul className="patrocinio">
                    <li><img src="images/logo-ritter.svg" alt="ritter"></img></li>
                    <li><img src="images/logo-nike.svg" alt="nike"></img></li>
                    <li><img src="images/logo-adidas.svg" alt="adidas"></img></li>
                    <li><img src="images/logo-newholland.svg" alt="newholland"></img></li>
                </ul>
            </div>
        </header>
    )
}

export default Header