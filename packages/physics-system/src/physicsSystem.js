// Module imports
import { store } from '@space-game/store'





/**
 * Detects collisions and updates entities accordingly.
 */
export function physicsSystem() {
	store.set(state => {
		const { entities } = state

		return {
			entities: entities.map(entity => {
				if (('physics' in entity) && ('rotation' in entity) && ('speed' in entity) && ('velocity' in entity)) {
					const {
						physics,
						rotation,
						speed,
						velocity,
					} = entity

					physics.body.setLinvel({
						x: velocity.x * speed.value,
						y: velocity.y * speed.value,
					}, true)

					physics.body.setRotation(rotation.value, true)
				}

				return entity
			}),
		}
	}, { forceNotify: true })

	const {
		physicsEvents,
		physicsWorld,
	} = store.state

	physicsWorld.step(physicsEvents)

	physicsEvents.drainContactForceEvents(event => {
		console.log('Contact Event', event)
	})

	physicsEvents.drainCollisionEvents((collider1, collider2, started) => {
		console.log('Collision Event', collider1, collider2, started)
	})
}
