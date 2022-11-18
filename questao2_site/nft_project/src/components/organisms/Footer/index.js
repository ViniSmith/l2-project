import React from "react";
import "./style.css";
import BlueButton from "../../atoms/buttons/BlueButton/index";


const Footer = () => {
    return (
        <footer className="container-footer">
            <div className="logo-container">
                <img src="/images/logo-footer.png" alt="logo-footer"/>
            </div>
            <div className="terms-list-container">
                <ul>
                    <li>Support</li>
                    <li>Term of service</li>
                    <li>License</li>
                </ul>
            </div>
            <div className="menu-list-container">
                <ul className="itens-footer">
                    <li>Auctions</li>
                    <li>Roadmap</li>
                    <li>Discover</li>
                    <li>Community</li>
                </ul>
            </div>
            <div className="button-container">
                <BlueButton text={"My account"}/>
            </div>
            <div className="social-media-container">
                <ul>
                    <li><img src="/images/redes-sociais/facebook.svg" alt="facebook"/></li>
                    <li><img src="/images/redes-sociais/linkedin.svg" alt="linkedin"/></li>
                    <li><img src="/images/redes-sociais/github.svg" alt="github"/></li>
                    <li><img src="/images/redes-sociais/twitter.svg" alt="twitter"/></li>
                    <li><img src="/images/redes-sociais/instagram.svg" alt="instagram"/></li>
                </ul>
            </div>

            <div className="text-container">
                <p>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, 
                    sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
            </div>
            <div className="input-footer-container">
                <input className="input-footer" type="text" placeholder="Newsletter"></input>
                <button>Sign in</button>
            </div>
        </footer>
    )
}

export default Footer;