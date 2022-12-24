import { Exception } from './Exception'

export class UserNotFoundException extends Exceptio {
	constructor() {
		super('User not found.')
		this.spanishMessage = 'Usuario no encontrado'
	}
}