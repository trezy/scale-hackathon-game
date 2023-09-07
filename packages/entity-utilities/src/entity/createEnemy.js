// Module imports
import {
	SHIP_CLASS,
	SPECIES,
} from '@space-game/static-data'





// Local imports
import { aiComponent } from '../component/aiComponent.js'
import { createEntity } from './createEntity.js'
import { physicsComponent } from '../component/physicsComponent.js'
import { positionComponent } from '../component/positionComponent.js'
import { rotationComponent } from '../component/rotationComponent.js'
import { shipComponent } from '../component/shipComponent.js'
import { sizeComponent } from '../component/sizeComponent.js'
import { velocityComponent } from '../component/velocityComponent.js'





/**
 * Creates an enemy entity.
 *
 * @param {object} config All configuration.
 * @param {number} config.height The height of the entity.
 * @param {object} config.position The enemy's position.
 * @param {number} config.position.x The enemy's position on the horizontal axis.
 * @param {number} config.position.y The enemy's position on the vertical axis.
 * @param {number} config.width The width of the entity.
 * @param {import('@dimforge/rapier2d-compat').World} config.world The physics world.
 * @returns {import('../types/Entity.js').Entity} The new entity.
 */
export function createEnemy(config) {
	const {
		height,
		position,
		width,
		world,
	} = config

	return createEntity(
		aiComponent(),
		physicsComponent({
			height,
			position,
			width,
			world,
		}),
		positionComponent(position.x, position.y),
		rotationComponent(0),
		shipComponent(SPECIES.SOLARIAN, SHIP_CLASS.BATTLECRUISER),
		sizeComponent(width, height),
		velocityComponent(0, 0),
	)
}
