// Module imports
import { v4 as uuid } from 'uuid'





/**
 * Creates a generic entity.
 *
 * @param {object[]} components Extra components to be set on the entity.
 * @returns {object} The new entity.
 */
export function createEntity(...components) {
	return {
		id: uuid(),
		...components.reduce((accumulator, component) => {
			return {
				...accumulator,
				...component,
			}
		}),
	}
}
