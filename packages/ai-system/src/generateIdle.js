// Local imports
import { ACTION_TYPES } from './ACTION_TYPES.js'





/**
 * Generates an idle action.
 *
 * @returns {{
 * 	timeRemaining: number,
 * 	type: string,
 * }} The generated action.
 */
export function generateIdle() {
	return {
		timeRemaining: Math.random() * 5000,
		type: ACTION_TYPES.IDLE,
	}
}
