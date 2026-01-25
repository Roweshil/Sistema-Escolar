La matrícula debe ser única

No se puede inscribir sin grupo

La edad debe ser válida



export class StudentService {
  static async createStudent(input) {
    const { matricula, groupId, birthDate } = input

    if (!matricula) {
      throw new Error('La matrícula es obligatoria')
    }

    const exists = await StudentRepository.findByMatricula(matricula)
    if (exists) {
      throw new Error('La matrícula ya existe')
    }

    if (!groupId) {
      throw new Error('El alumno debe tener un grupo')
    }

    return StudentRepository.create(input)
  }
}



// inscribir alumno a materias

export class EnrollmentService {
  static async enrollStudent({ studentId, subjects }) {
    const student = await StudentRepository.findById(studentId)
    if (!student) {
      throw new Error('Alumno no existe')
    }

    if (subjects.length > 7) {
      throw new Error('Máximo 7 materias')
    }

    await EnrollmentRepository.create(studentId, subjects)

    return { success: true }
  }
}