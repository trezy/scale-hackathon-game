/**
 * Manages the render size of an entity.
 *
 * @param {number} width The width of the entity.
 * @param {number} height The height of the entity.
 * @returns {{
 * 	size: {
 * 		width: number,
 * 		height: number,
 * 	},
 * }} The new size component.
 */
export function sizeComponent(width, height) {
	return {
		size: {
			width,
			height,
		},
	}
}
