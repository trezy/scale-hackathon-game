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
 * @param {number} x The entity's position on the horizontal axis.
 * @param {number} y The entity's position on the vertical axis.
 * @param {number} width The width of the entity.
 * @param {number} height The height of the entity.
 * @returns {import('../types/Entity.js').Entity} The new entity.
 */
export function createEnemy(x, y, width, height) {
	return createEntity(
		aiComponent(),
		physicsComponent({
			height,
			position: {
				x,
				y,
			},
			width,
		}),
		positionComponent(x, y),
		rotationComponent(0),
		shipComponent(SPECIES.SOLARIAN, SHIP_CLASS.BATTLECRUISER),
		sizeComponent(width, height),
		velocityComponent(0, 0),
	)
}
