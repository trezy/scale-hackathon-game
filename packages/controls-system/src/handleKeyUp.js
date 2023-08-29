// Local imports
import { state } from './state.js'





/**
 * Handles key up events.
 *
 * @param {KeyboardEvent} event The key up event.
 */
export function handleKeyUp(event) {
	delete state.activeKeys[event.code]
}
