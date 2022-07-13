import React from "react";
import Home from  "./Home";
import CuisineType from "./CuisineType"
import {Route, Routes} from 'react-router-dom';

function Pages() {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cuisine/:type" element={<CuisineType />}/>
            </Routes>
    );
}

export default Pages;