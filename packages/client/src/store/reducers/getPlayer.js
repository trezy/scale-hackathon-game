/**
 * Returns the player entity.
 *
 * @param {object} state The game state
 * @param {object[]} state.entities All game entities.
 * @returns {object} The player entity.
 */
export function getPlayer({ entities }) {
	return entities.find(entity => entity.isPlayer)
}
