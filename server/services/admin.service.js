export class AdminService {
  static async createUser(data) {
    if (data.role === 'admin') {
      throw new Error('No puedes crear admins')
    }

    return AdminRepository.create(data)
  }
}

Service (admin.service.js)

Reglas del sistema escolar

Decide qué se puede o no hacer