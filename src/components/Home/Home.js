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
                    Венчурне фінансування
                </h1>
                <h2 className="home-subtitle">
                    Довгострокові високоризикові інвестиції (зазвичай тривалістю в 5-7 років) приватного капіталу в акціонерний капітал новостворюваних малих високотехнологічних перспективних компаній з метою отримання доходу від приросту вартості вкладених коштів.
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
                    NPV
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
