export abstract class EntityRoot<Entity, PrimitiviData> {
	abstract toPrimitives(): PrimitiveData
}