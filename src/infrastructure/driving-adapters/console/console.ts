import { User } from '../../../domain/entities/User'
import { UserCreatorUseCase } from '../../../application/usecases/UserCreator'
import { InMemoryUserRepository } from '../../implementations/inMemory/inMemoryUserRepository'

(async () => {
	const inMemoryUserRepo = new InMemoryUserRepository()

	console.log(inMemoryUserRepo.userData)

	const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepo)
	const userToCreate: User = {
		name: 'Luma',
		age: 11,
		username: 'luma123',
		id: '123'
	}

	await userCreatorUseCase.run(userToCreate)

	console.log(inMemoryUserRepo.userData)
})()