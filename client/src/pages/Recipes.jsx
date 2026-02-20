import { useParams } from "react-router"
import { useState, useEffect } from "react";

export default function Recipes() {
    const {id} = useParams();
    const [recipes, setRecipes] = useState([])

    useEffect (() => {
            async function fetchData() {
                const res = await fetch(`http://localhost:8080/recipes/${id}`)
                const data = await res.json() 
                setRecipes(data)
            }
            fetchData()
        }, [])

    return(
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
            <img className="w-full h-64 object-cover rounded-lg mb-6" src={recipes.image_url} alt={recipes.title} />
            <h1 className="text-3xl font-bold mb-4">{recipes.title}</h1>
            <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
            <p className="text-gray-700 whitespace-pre-line">{recipes.ingredients}</p>
            <h2 className="text-xl font-semibold mt-4">Instructions</h2>
            <p className="text-gray-700 whitespace-pre-line">{recipes.instructions}</p>
        </div>
    )
}