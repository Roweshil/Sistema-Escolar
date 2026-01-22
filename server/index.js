import express from 'express'
import dotenv from 'dotenv'
import { createClient } from "@libsql/client"


dotenv.config()


const app = express()
const PORT = process.env.PORT 


app.use(express.json())

const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
})



app.use(express.json())

app.get('/', async (req, res) => {
  let result = await db.execute(`
  SELECT * FROM alumnos
`)
  res.json(result.rows)
})



app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
