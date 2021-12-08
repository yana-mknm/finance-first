import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import NavBar from "./NavBar";
import useGaTracker from '../useGaTracker'

const Header = () => {
	useGaTracker();
    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        homeHandleResize()
    }, []);

    useEffect(() => {
        window.addEventListener("resize", homeHandleResize, false);
        return () => window.removeEventListener("resize", homeHandleResize, false);
    });

    const homeHandleResize = () => {
        setScreenWidth(document.body.clientWidth);
    };

    return (
        <div className="header-container">
            <div className="header-logo__container">
                <Link to="/">
                    <img src={logo} alt="logo" className="header-logo"/>
                </Link>
            </div>
            <NavBar isMobileNavBar={screenWidth < 450 } />
        </div>

    );
};

export default Header;