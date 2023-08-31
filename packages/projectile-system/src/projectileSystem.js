// Module imports
import { createProjectile } from 'entity-utilities'





/**
 * Spawns new weapon projectiles.
 *
 * @param {object} store Statery store with the game's state.
 */
export function projectileSystem(store) {
	store.set(state => {
		const {
			entities,
			lastTick,
		} = state

		const projectiles = entities
			.filter(entity => Boolean(entity.weapons))
			.reduce((accumulator, entity) => {
				const {
					activeWeapons,
					isFiring,
				} = entity.weapons

				if (isFiring) {
					activeWeapons.forEach(weapon => {
						if ((lastTick - weapon.firingDelay) > weapon.lastFired) {
							switch (weapon.type) {
								case 'gun':
									accumulator.push(createProjectile(entity, weapon))
									break

								default:
							}

							weapon.lastFired = lastTick
						}
					})
				}

				return accumulator
			}, [])

		return {
			entities: [
				...entities,
				...projectiles,
			],
		}
	})
}
