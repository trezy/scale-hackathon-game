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
export function generateWander(entity, viewport) {
	const {
		position,
		size,
	} = entity

	const maxX = viewport.width - size.width
	const maxY = viewport.height - size.height

	const xFlipProbability = position.x / viewport.width
	const yFlipProbability = position.y / viewport.height

	const xFlip = (Math.random() > xFlipProbability) ? 1 : -1
	const yFlip = (Math.random() > yFlipProbability) ? 1 : -1

	const xTravelDistance = Math.floor(Math.random() * 250) * xFlip
	const yTravelDistance = Math.floor(Math.random() * 250) * yFlip

	const xTravelDestination = Math.max(0, Math.min(maxX, position.x + xTravelDistance))
	const yTravelDestination = Math.max(0, Math.min(maxY, position.y + yTravelDistance))

	return {
		destination: {
			x: xTravelDestination,
			y: yTravelDestination,
		},
		type: ACTION_TYPES.WANDER,
	}
}
