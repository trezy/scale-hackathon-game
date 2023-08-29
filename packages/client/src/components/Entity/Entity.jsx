// Module imports
import {
	Container,
	Graphics,
} from '@pixi/react'
import PropTypes from 'prop-types'
import { useCallback } from 'react'





/**
 * Renders the game background.
 *
 * @component
 */
export function Entity(props) {
	const { entity } = props

	const draw = useCallback(graphics => {
		graphics.clear()

		graphics.beginFill(entity.color)
		graphics.drawRect(
			0,
			0,
			20,
			20,
		)
	}, [entity])

	return (
		<Container
			x={entity.position.x}
			y={entity.position.y}>
			<Graphics draw={draw} />
		</Container>
	)
}

Entity.propTypes = {
	entity: PropTypes.object.isRequired,
}
