import { Exception } from './Exception'

export class UserMissingFieldsException extends Error {
	constructor() {
		super('Missing fields not valid or inexistents')
		this.spanishMessage = 'Campo no encontrado o inexistente'
	}
}