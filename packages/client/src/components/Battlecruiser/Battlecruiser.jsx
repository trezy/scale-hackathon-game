// Module imports
import {
	AnimatedSprite,
	Container,
} from '@pixi/react'
import {
	useEffect,
	useMemo,
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
 * Renders sprites for a Battlecruiser.
 *
 * @component
 */
export function Battlecruiser(props) {
	const { entity } = props

	const [rotation, setRotation] = useState(getEntityRotation(entity))

	const spritesheet = Assets.get('battlecruiser')

	const isMoving = useMemo(() => {
		return (entity.velocity.x !== 0) || (entity.velocity.y !== 0)
	}, [
		entity.velocity.x,
		entity.velocity.y,
	])

	useEffect(() => {
		if ((entity.velocity.x !== 0) || (entity.velocity.y !== 0)) {
			setRotation(getEntityRotation(entity))
		}
	}, [
		entity,
		entity.velocity.x,
		entity.velocity.y,
		setRotation,
	])

	return (
		<Container rotation={rotation}>
			{isMoving && (
				<AnimatedSprite
					anchor={SPRITE_ANCHOR}
					animationSpeed={ANIMATION_SPEED}
					isPlaying
					textures={spritesheet.animations['engine']} />
			)}

			<AnimatedSprite
				anchor={SPRITE_ANCHOR}
				animationSpeed={ANIMATION_SPEED}
				isPlaying
				textures={spritesheet.animations['base']} />
		</Container>
	)
}

Battlecruiser.propTypes = {
	entity: PropTypes.object.isRequired,
}
