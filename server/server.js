import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import pg, { Pool } from "pg"

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

app.get('/', (req, res) => {
    res.status(200).json({message: "You've reached the server"})
})

app.get('/recipes', async (req, res) => {
    const result = (await db.query("SELECT * FROM recipes")).rows
    res.json(result);
})

app.get('/recipes/:id', async (req, res) => {
    const result = (await db.query("SELECT * FROM recipes WHERE id = $1", [req.params.id])).rows
    res.json(result[0]);
})

app.post('/recipes', async (req, res) => {
    console.log("REQ BODY:", req.body);
    const { title, ingredients, instructions, image_url } = req.body;
    const result = (await db.query('INSERT INTO  recipes(title, ingredients, instructions, image_url) VALUES ($1, $2, $3, $4) RETURNING *', [title, ingredients, instructions, image_url])).rows
    res.status(201).json(result);
})

app.delete('/recipes/:id', async (req,res) => {
    (await db.query('DELETE FROM recipes WHERE id = $1', [req.params.id]));
    res.status(200).json({message:'recipe deleted successfully'});
})

app.listen(8080, () => {
    console.log(`server running on http://localhost:8080/`)
})