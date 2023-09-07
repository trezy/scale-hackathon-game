// Module imports
import {
	useCallback,
	useEffect,
} from 'react'
import { store } from '@space-game/store'





// Local imports
import { handleKeyDown } from './handleKeyDown.js'
import { handleKeyUp } from './handleKeyUp.js'





/**
 * Handles setup and teardown of event listeners.
 *
 * @param {*[]} [dependencies] Dependencies which, when changed, require the hook to be re-established.
 */
export function useControlsSystem(dependencies = []) {
	const keyDownHandler = useCallback(event => {
		return handleKeyDown(store, event)
	}, [store])

	useEffect(() => {
		window.addEventListener('keydown', keyDownHandler)
		window.addEventListener('keyup', handleKeyUp)

		return () => {
			window.removeEventListener('keydown', keyDownHandler)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [
		// eslint-disable-next-line react-hooks/exhaustive-deps
		...dependencies,
		keyDownHandler,
	])
}
