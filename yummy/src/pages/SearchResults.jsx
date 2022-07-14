import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

function SearchResults() {

    const [searchResult, setSearchResult] = useState([]);
    let params = useParams();

    const getSearchResults = async (name) => {
        const data = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SECRET_API_KEY}&number=9&query=${name}`
        );
        const recipes = await data.json();
        setSearchResult(recipes.results);
    };
    
    useEffect(() => {
        getSearchResults(params.search);
    },[params.search]);

    return (
        <Grid>
            {searchResult.map((recipe) => {
                return (
                    <Card key={recipe.id}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h4>{recipe.title}</h4>
                    </Card>
                );
            })}
        </Grid>
    );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }  
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;


export default SearchResults;