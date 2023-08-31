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
 * Renders sprites for a ship.
 *
 * @component
 */
export function Ship(props) {
	const { entity } = props
	const {
		ship,
		velocity,
	} = entity

	const [rotation, setRotation] = useState(getEntityRotation(entity))

	const spritesheet = Assets.get(`${ship.species}-${ship.class}`)

	const isMoving = useMemo(() => {
		return (velocity.x !== 0) || (velocity.y !== 0)
	}, [
		velocity.x,
		velocity.y,
	])

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

Ship.propTypes = {
	entity: PropTypes.object.isRequired,
}
