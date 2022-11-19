import React from "react";
import "./style.css";
import BlueButton from "../../atoms/buttons/BlueButton/index";


const Footer = () => {
    return (
        <footer className="container-footer">
            <div className="logo-container">
                <img src="/images/logo-footer.png" alt="logo-footer" />
            </div>
            <div className="terms-list-container">
                <ul>
                    <li><a href="#" target="_blank">Support</a></li>
                    <li><a href="#" target="_blank">Term of service</a></li>
                    <li><a href="#" target="_blank">License</a></li>
                </ul>
            </div>
            <div className="menu-list-container">
                <ul className="itens-footer">
                    <li><a href="#" target="_blank">Auctions</a></li>
                    <li><a href="#" target="_blank">Roadmap</a></li>
                    <li><a href="#" target="_blank">Discover</a></li>
                    <li><a href="#" target="_blank">Community</a></li>
                </ul>
            </div>
            <div className="button-container">
                <BlueButton text={"My account"} />
            </div>
            <div className="social-media-container">
                <ul>
                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><img src="/images/redes-sociais/facebook.svg" alt="facebook" /></a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><img src="/images/redes-sociais/linkedin.svg" alt="linkedin" /></a></li>
                    <li><a href="https://github.com" target="_blank" rel="noreferrer"><img src="/images/redes-sociais/github.svg" alt="github" /></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><img src="/images/redes-sociais/twitter.svg" alt="twitter" /></a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><img src="/images/redes-sociais/instagram.svg" alt="instagram" /></a></li>
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