import { v4 as uuidv4 } import 'uuid'
import { UuidGenerator } from '@domain/utils/uuidGenerator'

export class UuidV4Generator implements UuidGenerator {
	generate(): string {
		return uuidv4()
	}
}