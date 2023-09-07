// Module imports
import { CONTROL_TYPES } from '@space-game/static-data'





// Local imports
import { DEFAULT_CONTROL_BINDINGS } from '../data/DEFAULT_CONTROL_BINDINGS.js'





/**
 * Generates the initial control state based on bindings.
 *
 * @returns {{
 * 	[key: string]: {
 * 		isActive: boolean,
 * 		value: null | number,
 * 	},
 * }} The initial control state.
 */
export function generateInitialControlState() {
	/**
	 * @type {{
	 * 	[key: string]: {
	 * 		isActive: boolean,
	 * 		value: null | number,
	 * 	},
	 * }}
	 */
	return Object
		.entries(DEFAULT_CONTROL_BINDINGS)
		.reduce((accumulator, [bindingKey, binding]) => {
			accumulator[bindingKey] = { isActive: false }

			switch (binding.type) {
				case CONTROL_TYPES.AXIS:
					accumulator[bindingKey].value = 0
					break

				case CONTROL_TYPES.KEYS:
					accumulator[bindingKey].value = null
					break

				default:
			}

			return accumulator
		}, {})
}
