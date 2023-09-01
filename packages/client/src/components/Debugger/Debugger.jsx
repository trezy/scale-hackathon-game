// Module imports
import {
	getPlayer,
	store,
} from '@space-game/store'
import { useStore } from 'statery'





// Local imports
import styles from './Debugger.module.scss'





/**
 * Renders some debugging bullshit.
 *
 * @component
 */
export function Debugger() {
	const proxyStore = useStore(store)

	const player = getPlayer(proxyStore)
	const { entities } = proxyStore

	return (
		<div className={styles['debugger']}>
			<dl>
				<dt>{'Entity Count:'}</dt>
				<dd>{entities.length}</dd>

				<dt>{'Player X:'}</dt>
				<dd>{player.position.x.toFixed(2)}</dd>

				<dt>{'Player Y:'}</dt>
				<dd>{player.position.y.toFixed(2)}</dd>

				<dt>{'Player is firing:'}</dt>
				<dd>{String(player.weapons.isFiring)}</dd>
			</dl>
		</div>
	)
}
