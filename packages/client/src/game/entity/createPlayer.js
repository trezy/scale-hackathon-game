// Local imports
import { colorComponent } from '../component/colorComponent.js'
import { createEntity } from './createEntity.js'
import { positionComponent } from '../component/positionComponent.js'
import { sizeComponent } from '../component/sizeComponent.js'
import { velocityComponent } from '../component/velocityComponent.js'





/**
 * Creates the player-controlled entity.
 *
 * @returns {object} The new entity.
 */
export function createPlayer() {
	return createEntity(
		{ isPlayer: true },
		colorComponent(0x0000ff),
		positionComponent(0, 0),
		sizeComponent(10, 10),
		velocityComponent(0, 0),
	)
}
