import {Routes, Route} from 'react-router'
import Home from './pages/Home'
import AddRecipe from './pages/AddRecipe'
import Recipes from './pages/Recipes'

export default function App() {
  return (
    <div className=''>

      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/add" element= {<AddRecipe />} />
        <Route path="/recipes/:id" element= {<Recipes />} />
      </Routes>
    </div>
  )
}