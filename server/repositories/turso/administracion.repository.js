import dotenv from 'dotenv'
import { createClient } from "@libsql/client"

dotenv.config()

const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
})


export class ModeloAdmin {

    //Consultar usuarios

    static async getStudents() {
        let result = await db.execute(`
        SELECT * FROM alumnos
        `)
        res.json(result.rows)
        
    }

    static async getStudentById (id) {
        let result = await db.execute(`
        SELECT * FROM alumnos WHERE id = ?
        `, [id])
        res.json(result.rows)
    }


    static async getTeachers () {
        let result = await db.execute(`
        SELECT * FROM alumnos
        `)
        res.json(result.rows)
    }

    static async getTeacherById (id) {
        let result = await db.execute(`
        SELECT * FROM profesores WHERE id = ?
        `, [id])
        res.json(result.rows)
    }

    // Crear estudiantes y profesores

    static async createStudent ({ input }) {
        
        const { nombre, curp, email, rol } = input;
    }

    static async createTeacher ({ input }) {
        
        const { nombre, curp, email, rol } = input;
    }


    static async eliminar({ id }) {
        // Lógica para eliminar un registro escolar por ID
    }
    static async actualizar({ id, input }) {
        // Lógica para actualizar un registro escolar por ID
    }
} 



Crear alumnos

Actualizar informacion de usuarios

Eliminar usuarios

Asignar roles

