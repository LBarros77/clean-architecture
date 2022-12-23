export class UserMissingFieldsException extends Error {
	constructor() {
		super('Missing fields not valid or inexistents')
	}
}