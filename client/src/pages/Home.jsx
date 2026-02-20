import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";

export default function Home() {
    const [recipes, setRecipes] = useState([])

    useEffect (() => {
        async function fetchData() {
            const res = await fetch('http://localhost:8080/recipes')
            const data = await res.json() 
            setRecipes(data)
        }
        fetchData()
    }, [])

    async function handleDelete (id) {
        await fetch(`http://localhost:8080/recipes/${id}`, {method: "DELETE"})
    }

    return(
        <div>
            <Header />
            <h1 className="text-3xl font-bold mb-6 flex justify-center">All Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map (recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}