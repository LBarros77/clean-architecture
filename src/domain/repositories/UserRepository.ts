import { Nullable } from '@domain/Nullable'
import { User } from '../entities/user/User'

export interface UserRepository {
	getAll: () => Promise<User[]>
	getByUserName: (username: string) => Promise<Nullable<User>>
	getById: (id: string) => Promise<<Nullable<User>>
	update: (user: User) => Promise<User>
	delete: (user: User) => Promise<void>
	save: (user: User) => Promise<User>
}