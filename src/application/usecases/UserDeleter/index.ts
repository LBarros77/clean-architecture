import { User } from 'domain/entities/User'
import { UserRepository } from 'domain/repositories/UserRepository'
import { UserGetterById } from '../../../domain/services/UserGetterById'

export class UserDeleterUseCase {
	private readonly _userRepository = userRepository
	private readonly _userGetterById = UserGetterById

	constructor(userRepository: UserRepository) {
		this._userRepository = userRepository
		this._userGetterById = new UserGetterUseCase()
	}

	async run(userId: string): Promise<User> {
		const userToDelete = await this._userGetterById.run(userId)

		await this._userRepository.delete(userToDelete)

		return userToDelete
	}
}