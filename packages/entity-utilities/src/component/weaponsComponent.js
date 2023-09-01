// Types
/**
 * @typedef {object} Weapon
 * @property {number} firingDelay The delay (in milliseconds) between projectiles.
 * @property {number} [initialDelay] The delay (in milliseconds) before the weapon will start firing.
 * @property {null | number} [lastFired] The timestamp (in milliseconds) when this weapon was last fired.
 * @property {number} projectileDamage The amount of damage the weapon's projectiles will do.
 * @property {number} projectileDirection The angle offset for the weapon fire.
 * @property {object} [projectileOffset] The offset from which the origin at which projectiles will be spawned.
 * @property {number} projectileSpeed The speed of projectiles from this weapon.
 * @property {string} projectileType The type of projectiles from this weapon.
 * @property {string} type The type of weapon.
 */





/**
 * Manages the AI for a computer-controlled entity.
 *
 * @param {Weapon[]} weapons An array of weapons to attach to this entity.
 * @returns {{
 * 	weapons: {
 * 		activeWeapons: Weapon[],
 * 		isFiring: boolean,
 * 	},
 * }} The new AI component.
 */
export function weaponsComponent(...weapons) {
	const component = {
		weapons: {
			activeWeapons: weapons.map(weapon => {
				return {
					initialDelay: 100,
					projectileOffset: {
						x: 0,
						y: 0,
					},
					...weapon,
					lastFired: null,
				}
			}),
			isFiring: false,
		},
	}

	return component
}
