import { getAlumnos } from "../repositories/administracion.repository";



router.get('/', getAlumnos)