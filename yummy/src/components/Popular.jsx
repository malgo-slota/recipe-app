import { useEffect, useState } from "react";


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
        <div>
            <h1>Popular recipes</h1>
            {popularRecipes.map(recipe => {
                return (
                    <div key={recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={`${recipe.image}`} alt="recipe img"/>
                    </div>
                );
            })}
        </div>
    );
}

export default Popular;