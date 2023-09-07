// Module imports
import { Color } from '@pixi/color'
import { Graphics } from '@pixi/react'
import { PIXELS_PER_METER } from '@space-game/static-data'
import PropTypes from 'prop-types'
import { useCallback } from 'react'





/**
 * Renders the game.
 *
 * @component
 */
export function VertexRenderer(props) {
	const {
		color,
		vertexPoint0,
		vertexPoint1,
		vertexPoint2,
		vertexPoint3,
	} = props

	const draw = useCallback(graphics => {
		graphics.lineStyle(0.5, color, 1)
		graphics.moveTo(vertexPoint0 * PIXELS_PER_METER, vertexPoint1 * PIXELS_PER_METER)
		graphics.lineTo(vertexPoint2 * PIXELS_PER_METER, vertexPoint3 * PIXELS_PER_METER)
		graphics.closePath()
	}, [
		color,
		vertexPoint0,
		vertexPoint1,
		vertexPoint2,
		vertexPoint3,
	])

	return (
		<Graphics draw={draw} />
	)
}

VertexRenderer.propTypes = {
	color: PropTypes.instanceOf(Color).isRequired,
	vertexPoint0: PropTypes.number.isRequired,
	vertexPoint1: PropTypes.number.isRequired,
	vertexPoint2: PropTypes.number.isRequired,
	vertexPoint3: PropTypes.number.isRequired,
}
