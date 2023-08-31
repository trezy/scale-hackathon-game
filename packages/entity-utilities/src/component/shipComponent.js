/**
 * Sets the ship type of an entity.
 *
 * @param {string} species The species of the entity ship.
 * @param {string} shipClass The class of the entity ship.
 * @returns {{
 * 	ship: {
 * 		class: string,
 * 		species: string,
 * 	},
 * }} The new ship component.
 */
export function shipComponent(species, shipClass) {
	return {
		ship: {
			class: shipClass,
			species,
		},
	}
}
