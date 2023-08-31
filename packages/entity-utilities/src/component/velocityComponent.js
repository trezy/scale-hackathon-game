/**
 * Manages the velocity of an entity.
 *
 * @param {number} x The entity's velocity on the horizontal axis.
 * @param {number} y The entity's velocity on the vertical axis.
 * @returns {{
 * 	velocity: {
 * 		x: number,
 * 		y: number,
 * 	},
 * }} The new velocity component.
 */
export function velocityComponent(x, y) {
	return {
		velocity: {
			x,
			y,
		},
	}
}
