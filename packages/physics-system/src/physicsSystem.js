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
				if (('velocity' in entity) && ('physics' in entity)) {
					const {
						physics,
						velocity,
					} = entity

					physics.body.setLinvel({
						x: velocity.x,
						y: velocity.y,
					}, true)
				}

				return entity
			}),
		}
	}, true)

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
