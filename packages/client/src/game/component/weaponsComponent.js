// Types
/**
 * @typedef {object} Weapon
 * @property {number} damage The amount of damage the weapon's bullets will do.
 * @property {number} delay The delay (in milliseconds) between bullets.
 * @property {number} direction The angle offset for the weapon fire.
 * @property {string} type The type of weapon.
 */





// Constants
export const WEAPON_TYPES = {
	GUN: 'gun',
	MISSILE: 'missile',
}





/**
 * Manages the AI for a computer-controlled entity.
 *
 * @param {Weapon[]} [weapons] An array of weapons to attach to this entity.
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
			activeWeapons: weapons,
			isFiring: false,
		},
	}

	return component
}
