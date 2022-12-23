import { User } from '../../../domain/entities/User'
import { InMemoryUserRepository } from '../../implementations/inMemory/inMemoryUserRepository'
import { UserCreatorUseCase } from '../../../application/usecases/UserCreator'
import { UserGetterUseCase } from '../../../application/usecases/UserGetter'
import { UserUpdaterUseCase } from '../../../application/usecases/UserUpdater'
import { UserDeleterUseCase } from '../../../application/usecases/UserDeleter'

(async () => {
	const inMemoryUserRepo = new InMemoryUserRepository()

  // Creating users
	const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepo)
	const userToCreate: User = {
		name: 'Luma',
		age: 11,
		username: 'luma123',
		id: '123'
	}

	await userCreatorUseCase.run(userToCreate)

	// Getting users
	const userGetterUseCase = new UserGetterUseCase(inMemoryUserRepo)
	const usersGetted = await userGetterUseCase.run()

	console.log(usersGetted)

	// Updating users
	const userUpdaterUseCase = new UserUpdaterUseCase(inMemoryUserRepo)
	const usersUpdated = await userUpdaterUseCase.run({
		id: '1',
		username: 'lucinda'
	})

	// Deleting user by ID
	const userDeleterUseCase = new UserDeleterUseCase(inMemoryUserRepo)
	await userDeleterUseCase.run('1')

	const usersGetUpdated = await userGetterUseCase.run()

	console.log(usersGetUpdated)
})()