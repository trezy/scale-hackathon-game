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
			rotation={entity.physics.body.rotation()}
			x={entity.position.x}
			y={entity.position.y}>
			{'projectile' in entity && (
				<Projectile entity={entity} />
			)}

			{'ship' in entity && (
				<Ship entity={entity} />
			)}
		</Container>
	)
}

Entity.propTypes = {
	entity: PropTypes.object.isRequired,
}
