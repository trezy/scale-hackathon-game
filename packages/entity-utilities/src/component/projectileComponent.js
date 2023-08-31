/**
 * Manages the projectile type of an entity.
 *
 * @param {string} species The species of the projectile.
 * @param {string} type The type of the projectile.
 * @returns {{
 * 	projectile: {
 * 		species: string,
 * 		type: string,
 * 	},
 * }} The new projectile component.
 */
export function projectileComponent(species, type) {
	return {
		projectile: {
			species,
			type,
		},
	}
}
