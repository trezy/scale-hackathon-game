/**
 * Manages the render position of an entity.
 *
 * @param {number} x The entity's position on the horizontal axis.
 * @param {number} y The entity's position on the vertical axis.
 * @returns {{
 * 	position: {
 * 		x: number,
 * 		y: number,
 * 	},
 * }} The new position component.
 */
export function positionComponent(x, y) {
	return {
		position: {
			x,
			y,
		},
	}
}
