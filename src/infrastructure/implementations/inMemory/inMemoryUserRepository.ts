import { User } from 'domain/entities/User'
import { UserRepository } from 'domain/repositories/UserRepository'

export class InMemoryUserRepository implements UserRepository {
	readonly userData: User[] = []

	async getAll(): Promise<User[]> {
		return this.userData
	}

	async getByUsername(username: string): Promise<User | null> {
		const userFound = this.userData.find(x => x.username === username)

		if(userFound === undefined) return null

		return userFound
	}

	async getById(id: string): Promise<User | null> {
		return null
	}

	async update(user: User): Promise<User> {
		return user
	}

	async delete(user: User): Promise<void> {}

	async save(user: User): Promise<User> {
		this.userData.push(user)
		return user
	}
}