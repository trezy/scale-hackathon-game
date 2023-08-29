// Local imports
import { state } from './state.js'





/**
 * Captures and parses the current control state.
 *
 * @param {object} store Statery store with the game's state.
 */
export function controlsSystem(store) {
	const {
		controlBindings,
		controlState,
	} = store.state

	const bindingEntries = Object.entries(controlBindings)

	/** @type {null | object} */
	const updatedControlState = bindingEntries.reduce(
		(
			/** @type {null | object} */
			accumulator,
			[bindingKey, bindingData],
		) => {
			if (bindingData.type === 'keys') {
				const isBindingActive = bindingData.bindings.some(binding => {
					return binding.keys.every(key => {
						return Boolean(state.activeKeys[key])
					})
				})

				if (isBindingActive !== controlState[bindingKey].isActive) {
					if (accumulator === null) {
						accumulator = {}
					}

					accumulator[bindingKey] = {
						isActive: isBindingActive,
						value: null,
					}

					if (isBindingActive) {
						bindingData.onActivate()
					} else {
						bindingData.onDeactivate()
					}
				}
			}

			return accumulator
		},
		null,
	)

	if (updatedControlState !== null) {
		store.set(previousState => {
			return {
				controlState: {
					...previousState.controlState,
					...updatedControlState,
				},
			}
		})
	}
}
