// Module imports
import { useStore } from 'statery'





// Local imports
import { getPlayer } from '../../store/reducers/getPlayer.js'
import { store } from '../../store/store.js'





/**
 * Renders some debugging bullshit.
 *
 * @component
 */
export function Debugger() {
	const proxyStore = useStore(store)

	const player = getPlayer(proxyStore)

	return (
		<div>
			<dl>
				<dt>{'Player X:'}</dt>
				<dd>{player.position.x}</dd>

				<dt>{'Player Y:'}</dt>
				<dd>{player.position.y}</dd>
			</dl>
		</div>
	)
}
