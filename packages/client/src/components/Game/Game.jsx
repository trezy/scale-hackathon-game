// Local imports
import { GameBackground } from '../GameBackground/GameBackground.jsx'
import { Player } from '../Player/Player.jsx'
import { useGameLoop } from '../../hooks/useGameLoop.js'





/**
 * Renders the game.
 *
 * @component
 */
export function Game() {
	useGameLoop()

	return (
		<>
			<GameBackground />
			<Player />
		</>
	)
}
