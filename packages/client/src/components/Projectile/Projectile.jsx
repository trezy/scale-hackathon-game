// Module imports
import {
	AnimatedSprite,
	Container,
} from '@pixi/react'
import {
	useEffect,
	useState,
} from 'react'
import { Assets } from '@pixi/assets'
import PropTypes from 'prop-types'





// Local imports
import { getEntityRotation } from '../../helpers/getEntityRotation.js'





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
	const {
		projectile,
		velocity,
	} = entity

	const [rotation, setRotation] = useState(getEntityRotation(entity))

	const spritesheet = Assets.get(`${projectile.species}-projectile-${projectile.type}`)

	useEffect(() => {
		if ((velocity.x !== 0) || (velocity.y !== 0)) {
			setRotation(getEntityRotation(entity))
		}
	}, [
		entity,
		velocity.x,
		velocity.y,
		setRotation,
	])

	return (
		<Container rotation={rotation}>
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
