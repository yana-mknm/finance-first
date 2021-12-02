import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NavBar = ({ isMobileNavBar }) => {
    const [isNavBarVisible, setIsNavBarVisible] = useState(false);

    return (
        <nav className={`nav-container ${isMobileNavBar ? 'mobile' : ''}`} >
            {
                isMobileNavBar && (
                    <div
                        className={`${isNavBarVisible ? 'hamburger-container' : ''}`}
                        onClick={() => setIsNavBarVisible(!isNavBarVisible)}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                )
            }
            {
                (isNavBarVisible || !isMobileNavBar) && (
                    <ul className='nav-list' >
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/kvev" className="nav-link">Kvev</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/charts" className="nav-link">Charts</Link>
                        </li>
                    </ul>
                )
            }
        </nav>
    );
};

export default NavBar;