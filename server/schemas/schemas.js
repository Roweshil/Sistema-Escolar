import z from 'zod'

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required'
  }),
  year: z.number().int().min(1900).max(2025),
  director: z.string({
    invalid_type_error: 'Director must be a string',
    required_error: 'Director is required'
  }),
  duration: z.number().int().min(1),
  rate: z.number().min(0).max(10).optional(),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum(['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Documentary']),
    {
      required_error: 'Genre is required',
      invalid_type_error: 'Genre must be an array of enum Genre'
    }
  )
})

const registerTeacherSchema = z.object({
  name: z.string({
    invalid_type_error: 'Teacher name must be a string',
    required_error: 'Teacher name is required'
  })
})

const registerStudentSchema = z.object({
  name: z.string({
    invalid_type_error: 'Student name must be a string',
    required_error: 'Student name is required'
  })
}) 

const registerSubjectSchema = z.object({
  name: z.string({
    invalid_type_error: 'Subject name must be a string',
    required_error: 'Subject name is required'
  })
})

const registerSubjectHoursSchema = z.object({
    hours: z.number().int({
    invalid_type_error: 'Hours must be a number',
    required_error: 'Hours is required'
  })
})

const registerClassroomSchema = z.object({
  name: z.string({
    invalid_type_error: 'Classroom name must be a string',
    required_error: 'Classroom name is required'
  }),
  capacity: z.number().int({
    invalid_type_error: 'Capacity must be a number',
    required_error: 'Capacity is required'
  })
})

const assignmentsSchema = z.object({
  assignmentID: z.number().int({
    invalid_type_error: 'Assignment ID must be a number',
    required_error: 'Assignment ID is required'
  }),
  subject: z.number().int({
    invalid_type_error: 'Subject must be a number',
    required_error: 'Subject is required'
  }),
  teacherId: z.number().int({
    invalid_type_error: 'Teacher ID must be a number',
    required_error: 'Teacher ID is required'
  }),
  classroom: z.number().int({
    invalid_type_error: 'Classroom must be a number',
    required_error: 'Classroom is required'
  }),
  classSchedule: z.number().int({
    invalid_type_error: 'Class Schedule must be a number',
    required_error: 'Class Schedule is required'
  }),
  academicPeriod: z.number().int({
    invalid_type_error: 'Academic Period must be a number',
    required_error: 'Academic Period is required'
  })
})

const reportCardSchema = z.object({
  reportCardID: z.number().int({
    invalid_type_error: 'Report Card ID must be a number',
    required_error: 'Report Card ID is required'
  }),
  studentId: z.number().int({
    invalid_type_error: 'Student ID must be a number',
    required_error: 'Student ID is required'
  }),
  status: z.number().int({
    invalid_type_error: 'Status must be a number',
    required_error: 'Status is required'
  }),
  grade: z.number().min(0).max(100).optional()
})

export function validateMovie (input) {
  return movieSchema.safeParse(input)
}

export function validatePartialMovie (input) {
  return movieSchema.partial().safeParse(input)
}