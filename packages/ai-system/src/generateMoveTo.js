// Local imports
import { ACTION_TYPES } from './ACTION_TYPES.js'





/**
 * Generates a move to action with a random destination.
 *
 * @param {object} entity The entity that owns the action.
 * @param {object} viewport The viewport size.
 * @returns {{
 * 	destination: {
 * 		x: number,
 * 		y: number,
 * 	},
 * 	type: string,
 * }} The generated action.
 */
export function generateMoveTo(entity, viewport) {
	const maxX = viewport.width - entity.size.width
	const maxY = viewport.height - entity.size.height

	const xFlip = Math.random() > 0.5 ? 1 : -1
	const yFlip = Math.random() > 0.5 ? 1 : -1

	const xTravelDistance = Math.floor((Math.random() * 100) * xFlip)
	const yTravelDistance = Math.floor((Math.random() * 100) * yFlip)

	return {
		destination: {
			x: Math.max(0, Math.min(maxX, xTravelDistance)),
			y: Math.max(0, Math.min(maxY, yTravelDistance)),
		},
		type: ACTION_TYPES.MOVE_TO,
	}
}
