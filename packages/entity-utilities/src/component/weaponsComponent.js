/**
 * Manages the AI for a computer-controlled entity.
 *
 * @param {import('../types/Weapon.js').Weapon[]} weapons An array of weapons to attach to this entity.
 * @returns {{
 * 	weapons: {
 * 		activeWeapons: import('../types/Weapon.js').Weapon[],
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
