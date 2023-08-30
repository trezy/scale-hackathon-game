/**
 * Manages the AI for a computer-controlled entity.
 *
 * @returns {{
 * 	ai: {
 * 		action: null | object,
 * 		queue: object[],
 * 	},
 * }} The new AI component.
 */
export function aiComponent() {
	const component = {
		ai: {
			action: null,
			queue: [],
		},
	}

	return component
}
