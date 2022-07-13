import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

function CuisineType() {

    const [cuisineType, setCuisineType] = useState([]);
    let params = useParams();

    const getCuisineType = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SECRET_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisineType(recipes.results);
    };

    useEffect(() => {
        getCuisineType(params.type); 
    },[params.type]);

    return (
        <Grid>
            {cuisineType.map((recipe) => {
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

export default CuisineType;