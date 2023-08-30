// Module imports
import { Container } from '@pixi/react'
import PropTypes from 'prop-types'





// Local imports
import { Fighter } from '../Fighter/Fighter.jsx'





/**
 * Renders the game background.
 *
 * @component
 */
export function Entity(props) {
	const { entity } = props

	return (
		<Container
			x={entity.position.x}
			y={entity.position.y}>
			<Fighter entity={entity} />
		</Container>
	)
}

Entity.propTypes = {
	entity: PropTypes.object.isRequired,
}
