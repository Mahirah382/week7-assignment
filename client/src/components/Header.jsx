import { Link } from "react-router"

export default function Header() {
    return (
        <header className=" bg-green-900 text-white py-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recipes App</h2>
            <nav className="flex text-lg gap-6">
                <Link className="hover:text-green-300" to='/'>Home</Link>
                <Link className="hover:text-green-300" to='/'>Recipes</Link>
                <Link className="hover:text-green-300" to='/add'>Add Recipe</Link>
            </nav>
        </div>
        </header>
    )
}