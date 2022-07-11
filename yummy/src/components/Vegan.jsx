import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Vegan () {
    
    const[veganRecipes, setVeganRecipes] = useState([]);

    useEffect(() => {   
        getVeganRecipes();
    },[]);
    
    const getVeganRecipes = async () => {
        const check = localStorage.getItem('vegan');

        if(check){
            setVeganRecipes(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SECRET_API_KEY}&number=9&tags=vegan`
            );
            const data = await api.json();

            localStorage.setItem('vegan', JSON.stringify(data.recipes));
            setVeganRecipes(data.recipes);
        }
    };

    return (
        <Wrapper>
            <h3>Vegan recipes</h3>
            <Splide options={{
                perPage: 3,
                pagination: false,
                drag: 'free',
                gap: "1rem",
            }}>
                {veganRecipes.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt="recipe img"/>
                                <Gradient />
                            </Card>
                        </SplideSlide>
                );
            })}
            </Splide>   
        </Wrapper>
    );
}

//styled components
const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0 ,0 ,0), rgba(0, 0, 0, 0.5));
`;

export default Vegan;