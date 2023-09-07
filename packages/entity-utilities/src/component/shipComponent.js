// Module imports
import { SHIP_DATA } from '@space-game/static-data'





// Local imports
import { physicsComponent } from './physicsComponent.js'
import { positionComponent } from './positionComponent.js'
import { sizeComponent } from './sizeComponent.js'
import { speedComponent } from './speedComponent.js'





/**
 * Manages the ship type of an entity.
 *
 * @param {object} config All configuration.
 * @param {object} config.position The position of the entity ship.
 * @param {string} config.species The species of the entity ship.
 * @param {string} config.shipClass The class of the entity ship.
 * @param {import('@dimforge/rapier2d-compat').World} config.world The physics world.
 * @returns {{
 * 	ship: {
 * 		class: string,
 * 		species: string,
 * 	},
 * 	[key: string]: object,
 * }} The new ship component.
 */
export function shipComponent(config) {
	const {
		position,
		species,
		shipClass,
		world,
	} = config

	const {
		collider,
		spriteSize,
		thrustSpeed,
	} = SHIP_DATA[species][shipClass]

	return {
		ship: {
			class: shipClass,
			species,
		},
		...physicsComponent({
			height: collider.height,
			position,
			width: collider.width,
			world,
		}),
		...positionComponent(position.x, position.y),
		...sizeComponent(spriteSize.width, spriteSize.height),
		...speedComponent(thrustSpeed),
	}
}
