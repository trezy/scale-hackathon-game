// Local imports
import { CONTROL_BINDINGS } from '../data/controlBindings.js'
import { CONTROL_TYPES } from '../data/controlTypes.js'





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
		.entries(CONTROL_BINDINGS)
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
