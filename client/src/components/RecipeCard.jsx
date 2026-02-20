import { Link } from "react-router"

export default function RecipeCard({recipe}) {

    return(
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 border border-gray-200">
            <img className="h-40 w-full object-cover" src={recipe.image_url} alt={recipe.title} />
            <h2 className="text-2xl font-semibold text-green-900 mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.ingredients.slice(0,20)}...</p>

            <div className="flex justify-between gap-2">
                <Link className="inline-block text-green-700 font-medium hover:text-green-900" to={`/recipes/${recipe.id}`}>View Recipe</Link>
                <button className="text-red-600 hover:text-red-800 font-medium" onClick={() => onDelete(recipe.id)}>Delete</button>
            </div>
        </div>
    )
}