// Local imports
import { colorComponent } from '../component/colorComponent.js'
import { createEntity } from './createEntity.js'
import { positionComponent } from '../component/positionComponent.js'
import { sizeComponent } from '../component/sizeComponent.js'
import { velocityComponent } from '../component/velocityComponent.js'





/**
 * Creates an enemy entity.
 *
 * @param {number} x The entity's position on the horizontal axis.
 * @param {number} y The entity's position on the vertical axis.
 * @param {number} width The width of the entity.
 * @param {number} height The height of the entity.
 * @returns {object} The new entity.
 */
export function createEnemy(x, y, width, height) {
	return createEntity(
		colorComponent(0xff0000),
		positionComponent(x, y),
		sizeComponent(width, height),
		velocityComponent(0, 0),
	)
}
