/**
 * Manages the speed of an entity.
 *
 * @param {number} value The speed of the entity.
 * @returns {{
 * 	speed: {
 * 		value: number,
 * 	},
 * }} The new speed component.
 */
export function speedComponent(value) {
	return {
		speed: { value },
	}
}
