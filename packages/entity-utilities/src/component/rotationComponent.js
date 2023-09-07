/**
 * Manages the rotation of an entity.
 *
 * @param {number} value The entity's rotation.
 * @returns {{
 * 	rotation: {
 * 		value: number,
 * 	},
 * }} The new rotation component.
 */
export function rotationComponent(value) {
	return {
		rotation: { value },
	}
}
