import React from "react";
import Home from  "./Home";
import CuisineType from "./CuisineType";
import SearchResults from "./SearchResults";
import Recipe from "./Recipe";
import {Route, Routes} from 'react-router-dom';

function Pages() {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cuisine/:type" element={<CuisineType />}/>
                <Route path="/search/:search" element={<SearchResults />}/>
                <Route path="/recipe/:id" element={<Recipe />}/>
            </Routes>
    );
}

export default Pages;