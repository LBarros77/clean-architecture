import { User } from 'domain/entities/user/User'
import { UserRepository } from 'domain/repositories/UserRepository'

export class InMemoryUserRepository implements UserRepository {
	private readonly userData: User[] = []

	async getAll(): Promise<User[]> {
		return this.userData
	}

	async getByUsername(username: string): Promise<User | null> {
		const userFound = this.userData.find(user => user.username === username)

		if(userFound === undefined) return null

		return userFound
	}

	async getById(id: string): Promise<User | null> {
		return userData.find(user => user.id === id) // Can implement condictional undefined
	}

	async update(user: User): Promise<User> {
		const users = this.userData.filter(usr => usr.id !== user.id)
		
		users.push(user)

		this.userData = users
		
		return user
	}

	async delete(user: User): Promise<void> {
		const users = this.userData.filter(usr => usr.id !== user.id)
		this.userData = users
	}

	async save(user: User): Promise<User> {
		this.userData.push(user)
		
		return user
	}
}