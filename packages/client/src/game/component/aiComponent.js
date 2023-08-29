/**
 * Manages the AI for a computer-controlled entity.
 *
 * @returns {{
 * 	action: null | object,
 * 	isAI: true,
 * 	queue: object[],
 * }} The new AI component.
 */
export function aiComponent() {
	return {
		action: null,
		isAI: true,
		queue: [],
	}
}
