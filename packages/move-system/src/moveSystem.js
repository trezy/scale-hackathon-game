// Module imports
import { getRotationFromVector } from '@space-game/utilities'
import { PIXELS_PER_METER } from '@space-game/static-data'
import { store } from '@space-game/store'





/**
 * Moves entities based on their velocity.
 */
export function moveSystem() {
	store.set(previousState => {
		const { entities } = previousState

		return {
			entities: entities.map(entity => {
				if ('physics' in entity) {
					const {
						physics,
						position,
						rotation,
					} = entity

					// Pull the position from the collision body
					position.x = physics.body.translation().x * PIXELS_PER_METER
					position.y = physics.body.translation().y * PIXELS_PER_METER

					if (
						('rotation' in entity)
						&& ('velocity' in entity)
						&& ((entity.velocity.x !== 0) || (entity.velocity.y !== 0))
					) {
						rotation.value = getRotationFromVector(entity.velocity.x, entity.velocity.y)
					}
				}

				return entity
			}),
		}
	}, { forceNotify: true })
}
