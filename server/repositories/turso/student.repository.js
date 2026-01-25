import dotenv from 'dotenv'
import { createClient } from "@libsql/client"

dotenv.config()

const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
})


export class ModeloAdmin {
    static async obtenerTodos() {
        let result = await db.execute(`
        SELECT * FROM alumnos
        `)
        res.json(result.rows)
    }

    static async obtenerPorId(id) {
        let result = await db.execute(`
        SELECT * FROM alumnos WHERE id = ?
        `, [id])
        res.json(result.rows)
    }
    
    static async crear({ input }) {
        // Lógica para crear un nuevo registro escolar
    }
    static async eliminar({ id }) {
        // Lógica para eliminar un registro escolar por ID
    }
    static async actualizar({ id, input }) {
        // Lógica para actualizar un registro escolar por ID
    }
} 


Inscripciones

Horarios

Calificaciones