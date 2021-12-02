import React from 'react';
import { Routes, Route } from "react-router-dom";
import Charts from './components/Charts/ChartsHandler';
import Kvev from './components/Kvev/Kvev';
import Home from "./components/Home/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/kvev" element={<Kvev />} />
        </Routes>
    );
};

export default Router;

