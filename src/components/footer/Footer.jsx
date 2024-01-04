import React from "react";
import {
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Made with ❤️ by Akash Yadav
                </div>
               <div className="socialIcons">
                <span className="icon">
                    <a href="https://github.com/akashyadav30045"  target="_blank">
                        <FaGithub size={30} color="yellow" />
                        </a>
                </span>
                <span className="icon">
                    <a href="https://www.linkedin.com/in/akash-yadav-636973166/" target="_blank">
                    <FaLinkedin size={30} color="white"/>
                    </a>
                </span>
                <span className="icon">
                    <a href="https://twitter.com/rao_akash74" target="_blank">
                    <FaTwitter size={30} color="Blue"/>
                    </a>
                </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
