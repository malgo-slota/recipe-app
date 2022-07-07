import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';


function Popular() {

    const[popularRecipes, setPopularRecipes] = useState([]);

    useEffect(() => {   
        getPopularRecipes();
    },[]);
    
    const getPopularRecipes = async () => {

        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SECRET_API_KEY}&number=9`
            );
        const data = await api.json();
        setPopularRecipes(data.recipes);
    };

    return (
        <Wrapper>
            <h3>Popular recipes</h3>
            <Splide options={{
                perPage: 4,
                pagination: false,
                drag: 'free',
                gap: "1rem",
            }}>
                {popularRecipes.map((recipe) => {
                    return (
                        <SplideSlide>
                            <Card key={recipe.id}>
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

export default Popular;