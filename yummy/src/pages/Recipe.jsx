import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe () {
    let params = useParams();
    const [recipeDetails, setRecipeDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const getRecipeDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_SECRET_API_KEY}`
            );
        const detailsData = await data.json();
        setRecipeDetails(detailsData);
    };

    useEffect(() => {
        getRecipeDetails();
    },[params.id]);

    return (
        <Wrapper>
            <div>
                <h2>{recipeDetails.title}</h2>
                <img src={recipeDetails.image} alt={recipeDetails.title}/>
            </div>
            <Info>
                <Button onClick={() => setActiveTab('ingredients')}
                        className={activeTab === "ingredients" ? 'active' : '' }>
                    Ingredients
                </Button>
                <Button onClick={() => setActiveTab('instructions')}
                        className={activeTab === "instructions" ? 'active' : '' }>
                    Instructions
                </Button>
                {activeTab === "instructions" && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}></h3>
                    </div> 
                )}
                {activeTab === "ingredients" && (
                    <ul>
                        {recipeDetails.extendedIngredients.map((item) => {
                            return (
                                <li key={item.id}>
                                    {item.original}
                                </li>
                            );
                        })} 
                    </ul>
                )}
             
            </Info>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        border: 4npx solid #4b4b4b;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size:1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    border: 2px solid #4b4b4b;
    background: none;
`;

const Info = styled.div`
    margin-left: 10rem;
`;


export default Recipe;
