import { User } from '../entities/User'

export interface UserRepository {
	getAll: () => Promise<User[]>
	getByUsername: (username: string) => Promise<User | null>
	getById: (id: string) => Promise<User | null>
	update: (user: User) => Promise<User>
	delete: (user: User) => Promise<void>
	save: (user: User) => Promise<User>
}