// Module imports
import { Container } from '@pixi/react'
import PropTypes from 'prop-types'





// Local imports
import { Projectile } from '../Projectile/Projectile.jsx'
import { Ship } from '../Ship/Ship.jsx'





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
			{Boolean(entity.projectile) && (
				<Projectile entity={entity} />
			)}
			{Boolean(entity.ship) && (
				<Ship entity={entity} />
			)}
		</Container>
	)
}

Entity.propTypes = {
	entity: PropTypes.object.isRequired,
}
