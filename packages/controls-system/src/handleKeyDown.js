// Local imports
import { state } from './state.js'





/**
 * Handles key down events.
 *
 * @param {object} store Statery store with the game's state.
 * @param {KeyboardEvent} event The key down event.
 */
export function handleKeyDown(store, event) {
	state.activeKeys[event.code] = {
		pressedAt: store.delta,
	}
}
