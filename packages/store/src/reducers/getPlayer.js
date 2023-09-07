/**
 * Returns the player entity.
 *
 * @param {object} state The game state
 * @param {object[]} state.entities All game entities.
 * @returns {import('@space-game/entity-utilities').Entity} The player entity.
 */
export function getPlayer({ entities }) {
	return entities.find(entity => entity.isPlayer)
}
