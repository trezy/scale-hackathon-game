// Module imports
import {
	AnimatedSprite,
	Container,
} from '@pixi/react'
import { Assets } from '@pixi/assets'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Constants
const ANIMATION_SPEED = 1 / 8
/** @type {[number, number]} */
const SPRITE_ANCHOR = [0.5, 0.5]





/**
 * Renders sprites for a ship.
 *
 * @component
 */
export function Ship(props) {
	const { entity } = props
	const {
		ship,
		velocity,
		weapons,
	} = entity

	const spritesheet = Assets.get(`${ship.species}-ship-${ship.class}`)

	const isFiring = useMemo(() => Boolean(weapons?.isFiring), [weapons?.isFiring])
	const isMoving = useMemo(() => (velocity.x !== 0) || (velocity.y !== 0), [
		velocity.x,
		velocity.y,
	])

	return (
		<Container rotation={entity.rotation}>
			{isMoving && (
				<AnimatedSprite
					anchor={SPRITE_ANCHOR}
					animationSpeed={ANIMATION_SPEED}
					isPlaying
					textures={spritesheet.animations['engine']} />
			)}

			{isFiring && (
				<AnimatedSprite
					anchor={SPRITE_ANCHOR}
					animationSpeed={ANIMATION_SPEED}
					isPlaying
					textures={spritesheet.animations['weapons']} />
			)}

			{!isFiring && (
				<AnimatedSprite
					anchor={SPRITE_ANCHOR}
					animationSpeed={ANIMATION_SPEED}
					isPlaying
					textures={spritesheet.animations['base']} />
			)}
		</Container>
	)
}

Ship.propTypes = {
	entity: PropTypes.object.isRequired,
}
