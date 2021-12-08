import React from 'react';
import { Link } from "react-router-dom";
import homePageImage from '../../assets/images/geom-test-image.png'
import useGaTracker from '../useGaTracker'

const Home = () => {
	useGaTracker();
    return (
        <div className="home-container">
            <div className="home-container__left">
                <h1 className="home-header">
                    Lorem ipsum dolor sit amet.
                </h1>
                <h2 className="home-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid aspernatur, distinctio dolor dolore fuga modi obcaecati quas quia reiciendis saepe totam veritatis vitae!
                </h2>
                <Link
                    className="button button-blue"
                    to="/charts"
                >
                    Графіки
                </Link>
                <Link
                    className="button button-blue"
                    to="/kvev"
                >
                    Коефіцієнт
                </Link>
            </div>
            <div className="home-container__right">
                <img
                    src={homePageImage}
                    alt="finance"
                    className="home-container__image"
                />
            </div>

        </div>
    );
};

export default Home;