import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../domain/repositories/UserRepository'
import { UserGetterById } from '../../../domain/services/UserGetterById'
import { UserMissingFieldsException } from '../../../domain/exceptions/user/UserMissingFieldsException'

export class UserUpdaterUseCase {
	private readonly _userRepository: UserRepository
	private readonly _userGetterById: UserGetterById

	constructor(userRepository: UserRepository) {
		this._userRepository = userRepository
		this.userGetterById = new UserGetterUseCase(userRepository)
	}

	async run(data: User): Promise<User> {
		const user = await this._userGetterById.run(data.id)

		const dataToUpdate: User = {
			age: data.age ?? user.age,
			name: data.name ?? user.name,
			id: data.id,
			username: data.username ?? user.username
		}

		const userUpdated: User = await this._userRepository.update(dataToUpdate)
		const missingFieldsException = new UserMissingFieldsException()
		
		return (userUpdate)? userUpdate : missingFieldsException
	}
}