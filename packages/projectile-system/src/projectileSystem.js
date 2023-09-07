// Module imports
import { createProjectile } from '@space-game/entity-utilities'
import { store } from '@space-game/store'
import { WEAPON_TYPES } from '@space-game/static-data'





/**
 * Spawns new weapon projectiles.
 */
export function projectileSystem() {
	store.set(state => {
		const {
			entities,
			lastTick,
			physicsWorld,
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
						const fireDelay = weapon.fireRate * 1000

						if (!weapon.lastFired && ('initialDelay' in weapon) && (weapon.initialDelay > 0)) {
							weapon.lastFired = lastTick + weapon.initialDelay - fireDelay
						}

						if ((lastTick - fireDelay) >= weapon.lastFired) {
							switch (weapon.type) {
								case WEAPON_TYPES.GUN:
									accumulator.push(createProjectile({
										parentEntity: entity,
										weapon,
										world: physicsWorld,
									}))
									break

								default:
							}

							weapon.lastFired = lastTick
						}
					})
				} else {
					activeWeapons.forEach(weapon => {
						weapon.lastFired = null
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
