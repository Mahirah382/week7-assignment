import { useState } from "react";

export default function AddRecipe() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [image_url, setImage_url] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:8080/recipes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, ingredients, instructions, image_url})
        });

    }

    return(
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-bold text-green-950 flex justify-center p-5">Add your Recipe!</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input className="border p-2 rounded" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <textarea className="border p-2 rounded" value={ingredients} onChange={e => setIngredients(e.currentTarget.value)} placeholder="Ingredients"/>
                <textarea className="border p-2 rounded" value={instructions} onChange={e => setInstructions(e.target.value)} placeholder="Instructions"/>
                <input className="border p-2 rounded" value={image_url} onChange={e => setImage_url(e.target.value)} placeholder="Image URL" />
                <button type="submit" className="bg-green-700 text-white py-2 rounded hover:bg-pink-800">Add Recipe</button>
            </form>
        </div>
    )
}