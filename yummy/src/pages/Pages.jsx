import React from "react";
import Home from  "./Home";
import CuisineType from "./CuisineType";
import SearchResults from "./SearchResults";
import Recipe from "./Recipe";
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function Pages() {
    const location = useLocation();
    return (
            <AnimatePresence exitBeforeEnter>
                <Routes Location={location} key={location.pathname}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/cuisine/:type" element={<CuisineType />}/>
                    <Route path="/search/:search" element={<SearchResults />}/>
                    <Route path="/recipe/:id" element={<Recipe />}/>
                </Routes>
            </AnimatePresence>
            
    );
}

export default Pages;