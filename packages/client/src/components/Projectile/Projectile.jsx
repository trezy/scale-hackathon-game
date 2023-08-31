// Module imports
import {
	AnimatedSprite,
	Container,
} from '@pixi/react'
import { Assets } from '@pixi/assets'
import PropTypes from 'prop-types'





// Constants
const ANIMATION_SPEED = 1 / 8
/** @type {[number, number]} */
const SPRITE_ANCHOR = [0.5, 0.5]





/**
 * Renders sprites for a ship.
 *
 * @component
 */
export function Projectile(props) {
	const { entity } = props
	const { projectile } = entity

	const spritesheet = Assets.get(`${projectile.species}-projectile-${projectile.type}`)

	return (
		<Container rotation={entity.rotation}>
			<AnimatedSprite
				anchor={SPRITE_ANCHOR}
				animationSpeed={ANIMATION_SPEED}
				isPlaying
				textures={spritesheet.animations['fly']} />
		</Container>
	)
}

Projectile.propTypes = {
	entity: PropTypes.object.isRequired,
}
