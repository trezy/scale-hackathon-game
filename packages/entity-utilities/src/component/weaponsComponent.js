/**
 * Manages the AI for a computer-controlled entity.
 *
 * @param {import('@space-game/static-data').WeaponData[]} weapons An array of weapons to attach to this entity.
 * @returns {{
 * 	weapons: {
 * 		activeWeapons: import('@space-game/static-data').WeaponData[],
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
					...weapon,
					lastFired: null,
				}
			}),
			isFiring: false,
		},
	}

	return component
}
