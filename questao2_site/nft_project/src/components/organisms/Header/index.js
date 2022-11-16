import React from "react";
import Menu from "../../molecules/Menu";
import "./style.css";

const Header = () => {
    return(
        <header className="header">
            <Menu/>
            <div className="content-container">
                <div className="content">
                    <img className="NFT-icons left-icons" src="images/iconsH.png" alt="NFT icons"/>
                    <img className="NFT-icons right-icons" src="images/iconsH.png" alt="NFT icons"/>
                    <div className="center-content">
                        <h2 className="subtitle subtitle-uppercase">Non Fungible Tokens</h2>
                        <div className="titles-container">
                            <div className="title first-title">
                                <h1>A new NFT</h1>
                                <img src="images/title-img.svg" alt="title logo"></img>
                            </div>
                            <div className="title second-title">
                                <img src="images/title-img2.svg" alt="title logo"></img>
                                <h1>Experience</h1>
                            </div>
                        </div>
                        <h2 className="subtitle subtitle-lowercase">Discover, collect and sell</h2>
                    </div>
                </div>
            </div>
                <div className="sponsorships">
                    <ul className="sponsorships-list">
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