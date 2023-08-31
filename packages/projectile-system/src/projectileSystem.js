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
									accumulator.push(createProjectile({
										position: entity.position,
										species: entity.ship.species,
										type: weapon.projectileType,
										velocity: {
											x: Math.sign(entity.velocity.x) * weapon.projectileSpeed,
											y: Math.sign(entity.velocity.y) * weapon.projectileSpeed,
										},
									}))
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